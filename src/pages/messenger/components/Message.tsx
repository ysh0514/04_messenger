import MessageStyle from 'assets/styles/MessageStyle';
import { Modal } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/reducers';

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
  const auth = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  const isAuthor = userId === auth.userId;

  return (
    <Container>
      <ProfileImage src={profileImage} />
      <MessageWrapper>
        <UserNameDateFunction>
          <UserNameDate>
            <UserName>
              {userName}
              {isAuthor && <AreYouAuthor>*</AreYouAuthor>}
            </UserName>
            <MessageDate>{date}</MessageDate>
          </UserNameDate>
          {/* 모달창에는 표시 X */}
          <MessageFunction>
            {isAuthor && (
              <DeleteBtn id={date} onClick={onClickDelete}>
                삭제하기
              </DeleteBtn>
            )}
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
