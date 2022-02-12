import styled, { keyframes } from 'styled-components';

const modalShowAnimation = keyframes`
    from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `;

const modalBgShowAnimation = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const ModalOverlay = styled.div<{ isShow: boolean }>`
  display: ${(props) => (!props.isShow ? 'none' : 'flex')};
  position: fixed;
  margin: 0 auto;
  margin: auto 0;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalBox = styled.div`
  padding: 30px 18px;
  max-width: 600px;
  max-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  bottom: 0px;
  border-radius: 0.3rem;
  background-color: #ffffff;
  // animation
  animation: ${modalShowAnimation} 0.3s;
  overflow: hidden;
`;

const ModalTitleBox = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  font-weight: 700;
  margin-bottom: 30px;
`;

const ModalTitle = styled.span`
  font-size: 22px;
`;

const ModalClose = styled.button`
  outline: none;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border: 0;
  font-weight: bold;
`;

const ModalContent = styled.main`
  display: flex;
  flex-direction: column;
`;

const UserWarning = styled.span`
  font-size: 13px;
  line-height: 20px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: normal;
`;

const UserSelectionBox = styled.footer`
  margin-top: 40px;
  text-align: right;
`;

const UserCancle = styled.button`
  padding: 8px 20px;
  border-radius: 5px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const UserDelete = styled(UserCancle)`
  margin-left: 12px;
  color: white;
  background-color: rgb(165, 18, 0);
  border: none;
`;

const ModalStyle = {
  ModalBox,
  ModalOverlay,
  ModalTitleBox,
  ModalTitle,
  ModalClose,
  UserWarning,
  ModalContent,
  UserSelectionBox,
  UserCancle,
  UserDelete,
};

export default ModalStyle;
