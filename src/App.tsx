import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/reducers/';
import { useLogin } from './hooks';
import Login from 'pages/login/Login';
import Messenger from 'pages/messenger/Messenger';

export default function App() {
  const auth = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  const { response } = useLogin(auth.userId);

  useEffect(() => {
    if (!response) return;

    dispatch({ type: 'common', name: 'userName', data: response.name });
    dispatch({ type: 'common', name: 'userId', data: response.id });
    dispatch({ type: 'common', name: 'profileImage', data: response.img });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Messenger userId={auth.userId} profileImage={auth.profileImage} />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
