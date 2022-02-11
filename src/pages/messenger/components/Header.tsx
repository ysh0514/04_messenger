import { useState } from 'react';
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

// interface headerProps {
//   userName: string;
//   profileImage: string;
// }

// interface headerComponentProps {
//   attr: headerProps;
// }

export default function Header() {
  // const { userName, profileImage } = attr;
  const [isClick, setIsClick] = useState<boolean>(false);

  const profileClick = () => {
    setIsClick((curr) => !curr);
  };

  return (
    <>
      <HeaderContainer>
        <WelcomeText>
          <LogoImage src={HEADER_LOGO} alt="로고 이미지" />
          환영합니다
          <PointText>ooo</PointText>님
        </WelcomeText>
        <ProfileImage src="" alt="프로필 사진" onClick={profileClick} />
      </HeaderContainer>
      {isClick && (
        <MenuContainer>
          <MenuList>
            <MenuListItem>
              <ProfileImage src="" alt="프로필 사진" />
              <UserName>ooo</UserName>
            </MenuListItem>
            <MenuListItem>User Setting</MenuListItem>
            <MenuListItem>Sign Out</MenuListItem>
          </MenuList>
        </MenuContainer>
      )}
    </>
  );
}
