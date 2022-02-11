import ModalStyle from '../../assets/styles/ModalStyle';

const { ModalWrapper } = ModalStyle;

interface ModalProps {
  isShow: boolean;
  type: string;
  header: string;
  content: object; // 삭제 대상
  onClick: (type: string) => void;
}

export default function Modal(attr: ModalProps) {
  const { isShow, header, type, content, onClick } = attr;
  function getButtons() {
    // 일단 대화 삭제 경우만 작성하였음
    const btnGroup = [
      <button key="cancel" onClick={() => onClick('cancel')}>
        취소
      </button>,
      <button key="delete" onClick={() => onClick('delete')}>
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
          <button className="close" onClick={() => onClick('cancel')}>
            {' '}
          </button>
        </header>
        {/* <main>{content}</main> */}
        <main>삭제할 대화</main>
        <footer>{getButtons()}</footer>
      </section>
    </ModalWrapper>
  );
}
