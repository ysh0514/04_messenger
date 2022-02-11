import { useState } from 'react';
import HeaderStyle from 'assets/styles/HeaderStyle';

const {
  HeaderContainer,
  MenuContainer,
  MenuList,
  ProfileButton,
  MenuListItem,
  WelcomeText,
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
        <WelcomeText>환영합니다 ooo님</WelcomeText>
        <ProfileButton type="button" onClick={profileClick}>
          <img src="" alt="프로필 사진" />
        </ProfileButton>
      </HeaderContainer>
      {isClick && (
        <MenuContainer>
          <MenuList>
            <MenuListItem>User Setting</MenuListItem>
            <MenuListItem>Sign Out</MenuListItem>
          </MenuList>
        </MenuContainer>
      )}
    </>
  );
}
