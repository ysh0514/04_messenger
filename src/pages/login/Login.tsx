import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userInfoProps } from '../../utils/InterfaceSet';
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
  const [userInfo, setUserInfo] = useState<userInfoProps>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) return;

    dispatch({ type: 'common', name: 'isLogged', data: true });
    dispatch({ type: 'common', name: 'userId', data: userInfo.id });
    dispatch({ type: 'common', name: 'userName', data: userInfo.name });
    dispatch({ type: 'common', name: 'profileImage', data: userInfo.img });
    navigate('/');
  }, [dispatch, navigate, userInfo]);

  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginInfo({ ...loginInfo, [key]: e.target.value.toLowerCase() });
      setErrorMsg('');
    };

  const handleLogin = () => {
    const END_POINT = 'https://json-server-wanted14.herokuapp.com/login';
    axios
      .post(END_POINT, { id: loginInfo.id, password: loginInfo.password })
      .then((res) => {
        if (res.data) {
          const { data } = res;
          setUserInfo(data);
        } else {
          setErrorMsg('아이디와 비밀번호를 확인해주세요');
          setUserInfo(undefined);
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
