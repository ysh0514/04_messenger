import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HEADER_LOGO } from 'utils/ImageUtil';
import HeaderStyle from 'assets/styles/HeaderStyle';

const {
  HeaderContainer,
  WelcomeText,
  LogoImage,
  PointText,
  MenuContainer,
  MenuList,
  ProfileImage,
  MenuListItem,
  UserName,
} = HeaderStyle;

interface headerProps {
  userName: string;
  profileImage: string;
}

export default function Header({ userName, profileImage }: headerProps) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileClick = () => {
    setIsClick((curr) => !curr);
  };

  const handleLogout = () => {
    dispatch({ type: 'common', name: 'isLogged', data: false });
    dispatch({ type: 'common', name: 'userId', data: '' });
    dispatch({ type: 'common', name: 'userName', data: '' });
    dispatch({ type: 'common', name: 'profileImage', data: '' });
    dispatch({ type: 'common', name: 'content', data: '' });
    dispatch({ type: 'common', name: 'date', data: '' });
    navigate('/login');
  };
  return (
    <>
      <HeaderContainer>
        <WelcomeText>
          <LogoImage src={HEADER_LOGO} alt="로고 이미지" />
          환영합니다
          <PointText>{userName}</PointText>님
        </WelcomeText>
        <ProfileImage
          src={profileImage}
          alt="프로필 사진"
          onClick={profileClick}
        />
      </HeaderContainer>
      {isClick && (
        <MenuContainer>
          <MenuList>
            <MenuListItem>
              <ProfileImage src={profileImage} alt="프로필 사진" />
              <UserName>{userName}</UserName>
            </MenuListItem>
            <MenuListItem>User Setting</MenuListItem>
            <MenuListItem onClick={handleLogout}>Sign Out</MenuListItem>
          </MenuList>
        </MenuContainer>
      )}
    </>
  );
}
