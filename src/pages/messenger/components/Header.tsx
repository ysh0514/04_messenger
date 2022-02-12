import { useState } from 'react';
import { HEADER_LOGO } from 'utils/ImageUtil';
import HeaderStyle from 'assets/styles/HeaderStyle';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';

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
  // const { userName, profileImage } = attr;
  const [isClick, setIsClick] = useState<boolean>(false);
  const dispatch = useDispatch();

  const profileClick = () => {
    setIsClick((curr) => !curr);
  };

  const handleLogout = () => {
    //
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
