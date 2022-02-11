import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1px solid black;
`;

const WelcomeText = styled.h1`
  font-size: 20px;
  font-weight: 900;
`;

const ProfileButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  width: 250px;
  height: 100px;
  border: 1px solid black;
  background-color: white;
  position: absolute;
  top: 55px;
  right: 20px;
  z-index: 100;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
`;

const MenuListItem = styled.li`
  cursor: pointer;
`;

const HeaderStyle = {
  HeaderContainer,
  WelcomeText,
  MenuContainer,
  MenuList,
  ProfileButton,
  MenuListItem,
};

export default HeaderStyle;
