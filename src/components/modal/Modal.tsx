import { useDispatch } from 'react-redux';
import ModalStyle from '../../assets/styles/ModalStyle';
import Message from 'pages/messenger/components/Message';
import axios from 'axios';

const {
  ModalOverlay,
  ModalBox,
  ModalTitleBox,
  ModalTitle,
  UserWarning,
  ModalClose,
  ModalContent,
  UserSelectionBox,
  UserCancle,
  UserDelete,
} = ModalStyle;

interface modalProps {
  userId: string;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
  id?: string;
}

interface ModalProps {
  getData: () => void;
  isShow: boolean;
  header: string;
  content: modalProps; // 삭제 대상
}

export default function Modal(attr: ModalProps) {
  const { isShow, header, content, getData } = attr;

  const dispatch = useDispatch();

  const onDelete = () => {
    axios
      .delete(
        `https://json-server-wanted14.herokuapp.com/messages/${content.id}`
      )
      .then((res) => {
        dispatch({ type: 'close' });
        getData();
      });
    // console.log(content.id, '삭제되었습니다.');
  };

  function closeModal() {
    dispatch({ type: 'close' });
  }

  return (
    <ModalOverlay isShow={isShow}>
      <ModalBox>
        <ModalTitleBox>
          <ModalTitle>{header}</ModalTitle>
          <ModalClose className="close" onClick={closeModal}>
            X
          </ModalClose>
        </ModalTitleBox>
        <ModalContent>
          <UserWarning>
            이 메시지를 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.
          </UserWarning>
          <Message getData={getData} attr={content} isDelete={true} />
        </ModalContent>
        <UserSelectionBox>
          <UserCancle>취소</UserCancle>
          <UserDelete onClick={onDelete}>삭제</UserDelete>
        </UserSelectionBox>
      </ModalBox>
    </ModalOverlay>
  );
}
