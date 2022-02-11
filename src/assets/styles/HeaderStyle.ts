import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 1px solid lightgray;
`;

const WelcomeText = styled.h1`
  font-size: 20px;
  font-weight: 900;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 50%;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  width: 250px;
  height: 160px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 65px;
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
  &:first-child {
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
  }
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
`;

const HeaderStyle = {
  HeaderContainer,
  WelcomeText,
  MenuContainer,
  MenuList,
  ProfileImage,
  MenuListItem,
  UserName,
};

export default HeaderStyle;
