import { useState } from 'react';
import LOGO from '../../assets/images/logo.svg';
import LoginStyle from 'assets/styles/LoginStyle';
import axios from 'axios';

const {
  Container,
  LogoBox,
  InputContainer,
  Input,
  BtnContainer,
  ErrorBox,
  LoginBtn,
  SignupBtn,
} = LoginStyle;

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value.toLowerCase() });
    setErrorMsg('');
  };

  const handleLogin = () => {
    const END_POINT = 'http://localhost:4000/users';
    axios
      .get(`${END_POINT}?id=${loginInfo.id}&password=${loginInfo.password}`)
      .then((res) => {
        setErrorMsg(
          res.data.length ? '성공' : '아이디 또는 비밀번호를 확인해주세요'
        );
      });
  };

  const handleKeyPress = (e) => {
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
        <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
      </BtnContainer>
    </Container>
  );
}
