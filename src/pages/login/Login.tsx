import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import axios from 'axios';
import LOGO from '../../assets/images/logo.svg';
import LoginStyle from 'assets/styles/LoginStyle';

const {
  Container,
  LogoBox,
  InputContainer,
  Input,
  BtnContainer,
  ErrorBox,
  LoginBtn,
  // SignupBtn,
} = LoginStyle;

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authInfo = useSelector((state: RootState) => state.authReducer);

  const handleInputValue =
    (key: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      // any 수정해야함
      setLoginInfo({ ...loginInfo, [key]: e.target.value.toLowerCase() });
      setErrorMsg('');
    };

  const handleLogin = () => {
    const END_POINT = 'https://json-server-wanted14.herokuapp.com/users';
    axios
      .get(`${END_POINT}?id=${loginInfo.id}&password=${loginInfo.password}`)
      .then((res) => {
        if (res.data.length) {
          const { data } = res;
          navigate('/');
          dispatch({ type: 'common', name: 'isLogged', data: true });
          dispatch({ type: 'common', name: 'userId', data: data.userId });
          dispatch({
            type: 'common',
            name: 'userName',
            data: data.userName,
          });
          dispatch({
            type: 'common',
            name: 'profileImage',
            data: data.profileImage,
          });
          console.log(authInfo);
        } else {
          setErrorMsg('아이디와 비밀번호를 확인해주세요');
        }
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.type === 'keypress' && e.code === 'Enter') {
      handleLogin();
    }
  };

  return (
    <Container>
      <LogoBox src={LOGO} />
      <InputContainer>
        <Input
          placeholder="ID"
          type="id"
          onChange={handleInputValue('id')}
          onKeyPress={handleKeyPress}
        />
        <Input
          placeholder="PW"
          type="password"
          onChange={handleInputValue('password')}
          onKeyPress={handleKeyPress}
        />
        <ErrorBox>{errorMsg}</ErrorBox>
      </InputContainer>
      <BtnContainer>
        <LoginBtn
          hasInput={!!loginInfo.id.length && !!loginInfo.password.length}
          onClick={handleLogin}
        >
          로그인
        </LoginBtn>
      </BtnContainer>
    </Container>
  );
}
