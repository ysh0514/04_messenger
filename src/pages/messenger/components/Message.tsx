import MessageStyle from 'assets/styles/MessageStyle';
import { Modal } from 'components';

const {
  Container,
  ProfileImage,
  MessageWrapper,
  UserNameDateFunction,
  UserNameDate,
  MessageFunction,
  AnswerBtn,
  DeleteBtn,
  UserName,
  MessageDate,
  MessageText,
  AreYouAuthor,
} = MessageStyle;

interface messagesProps {
  userId: string;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
}

interface messageComponentProps {
  attr: messagesProps;
  onClickReply: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Message({
  attr,
  onClickReply,
  onClickDelete,
}: messageComponentProps) {
  const { userId, userName, profileImage, content, date } = attr;
  return (
    <Container>
      <ProfileImage src={profileImage} />
      <MessageWrapper>
        <UserNameDateFunction>
          <UserNameDate>
            <UserName>
              {userName}
              <AreYouAuthor>*</AreYouAuthor>
              {/* *은 작성자에게만 보이게 합니다 */}
            </UserName>
            <MessageDate>{date}</MessageDate>
          </UserNameDate>
          {/* 모달창에는 표시 X */}
          <MessageFunction>
            <DeleteBtn id={date} onClick={onClickDelete}>
              삭제하기
            </DeleteBtn>
            {/* 삭제버튼은 작성자에게만 보이게 합니다 */}
            <AnswerBtn id={date} onClick={onClickReply}>
              답장하기
            </AnswerBtn>
          </MessageFunction>
          {/*  모달창에는 표시 X */}
        </UserNameDateFunction>
        <MessageText>{content}</MessageText>
      </MessageWrapper>
      {/* <Modal
        isShow={true}
        type={'삭제'}
        header={'삭제'}
        content={{ hi: 'hi' }}
        onClick={onClick}
      /> */}
    </Container>
  );
}
