import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducers/';
import Login from 'pages/login/Login';
import Messenger from 'pages/messenger/Messenger';

export default function App() {
  const auth = useSelector((state: RootState) => state.authReducer);

  return (
    <BrowserRouter>
      <Routes>
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
