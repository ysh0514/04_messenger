import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import ModalStyle from '../../assets/styles/ModalStyle';

const { ModalWrapper } = ModalStyle;

interface ModalProps {
  isShow: boolean;
  type: string;
  header: string;
  content: object; // 삭제 대상
  onClick: (type: string, data: any) => void;
}

export default function Modal(attr: ModalProps) {
  const { isShow, header, type, content, onClick } = attr;
  const showModal = useSelector(
    (state: RootState) => state.switReducer.showModal
  );
  const dispatch = useDispatch();

  function closeModal() {
    dispatch({ type: 'common', name: 'showModal', data: false });
  }

  function getButtons() {
    // 일단 대화 삭제 경우만 작성하였음
    const btnGroup = [
      <button key="cancel" onClick={closeModal}>
        취소
      </button>,
      <button key="delete" onClick={() => onClick('delete', content)}>
        삭제
      </button>,
    ];
    return btnGroup;
  }

  return (
    <ModalWrapper isShow={isShow}>
      <section>
        <header>
          {header}
          <button className="close" onClick={closeModal}>
            {' '}
          </button>
        </header>
        <main>{content}</main>
        <footer>{getButtons()}</footer>
      </section>
    </ModalWrapper>
  );
}
