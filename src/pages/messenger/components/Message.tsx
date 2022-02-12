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
  onClickReply?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteData?: messagesProps;
  isDelete?: boolean;
}

export default function Message({
  attr,
  onClickReply,
  onClickDelete,
  deleteData,
  isDelete = false,
}: messageComponentProps) {
  const { userId, userName, profileImage, content, date } = attr;
  const auth = useSelector((state: RootState) => state.authReducer);
  const isAuthor = userId === auth.userId;
  const showModal = useSelector((state: RootState) => state.switReducer);

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
            {isAuthor && !isDelete && (
              <DeleteBtn id={date} onClick={onClickDelete}>
                삭제하기
              </DeleteBtn>
            )}
            {!isDelete && (
              <AnswerBtn id={date} onClick={onClickReply}>
                답장하기
              </AnswerBtn>
            )}
          </MessageFunction>
          {/*  모달창에는 표시 X */}
        </UserNameDateFunction>
        <MessageText>{content}</MessageText>
      </MessageWrapper>
      {showModal && deleteData && (
        <Modal
          key={date}
          isShow={deleteData?.date === date}
          header={'메세지를 삭제하시겠습니까?'}
          content={deleteData}
        />
      )}
    </Container>
  );
}
