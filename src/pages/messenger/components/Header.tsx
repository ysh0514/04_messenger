import { useState } from 'react';
import HeaderStyle from 'assets/styles/HeaderStyle';

const {
  HeaderContainer,
  MenuContainer,
  MenuList,
  ProfileImage,
  MenuListItem,
  WelcomeText,
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
        <WelcomeText>환영합니다 ooo님</WelcomeText>
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
