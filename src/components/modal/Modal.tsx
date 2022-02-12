import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import ModalStyle from '../../assets/styles/ModalStyle';
import { messagesProps } from 'pages/messenger/containers/MessageContainer';
import Message from 'pages/messenger/components/Message';
import axios from 'axios';

const { ModalWrapper } = ModalStyle;

interface modalProps {
  userId: string;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
  id?: string;
}

interface ModalProps {
  isShow: boolean;
  header: string;
  content: modalProps; // 삭제 대상
}

export default function Modal(attr: ModalProps) {
  const { isShow, header, content } = attr;

  const dispatch = useDispatch();

  const onDelete = () => {
    axios.delete(
      `https://json-server-wanted14.herokuapp.com/messages/${content.id}`
    );
    dispatch({ type: 'close' });

    console.log(content.id, '삭제되었습니다.');
  };

  function closeModal() {
    dispatch({ type: 'close' });
  }

  // function getButtons() {
  // 일단 대화 삭제 경우만 작성하였음
  //   const btnGroup = [
  //     <button key="cancel" onClick={closeModal}>
  //       취소
  //     </button>,
  //     <button key="delete" onClick={() => onClick('delete', content)}>
  //       삭제
  //     </button>,
  //   ];
  //   return btnGroup;
  // }

  return (
    <ModalWrapper isShow={isShow}>
      <section>
        <header>
          {header}
          <button className="close" onClick={closeModal}>
            닫기
          </button>
        </header>
        <main>
          <Message attr={content} isDelete={true} />
        </main>
        <footer>
          <button>취소</button>
          <button onClick={onDelete}>삭제</button>
        </footer>
      </section>
    </ModalWrapper>
  );
}
