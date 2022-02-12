import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/reducers/';
import { useLogin } from './hooks';
import Login from 'pages/login/Login';
import Messenger from 'pages/messenger/Messenger';
import LoadingIndicator from 'components/LoadingIndicator';

export default function App() {
  const auth = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  const { response } = useLogin(auth.userId);

  // useEffect(() => {
  //   if (!response) return;
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loading" element={LoadingIndicator} />
        <Route
          path="/"
          element={
            <Messenger
              userId={auth.userId}
              userName={auth.userName}
              profileImage={auth.profileImage}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
