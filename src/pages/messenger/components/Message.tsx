import MessageStyle from 'assets/styles/MessageStyle';

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
}

export default function Message({ attr }: messageComponentProps) {
  const { userId, userName, profileImage, content, date } = attr;
  return (
    <Container>
      <ProfileImage src={profileImage} />
      <MessageWrapper>
        <UserNameDateFunction>
          <UserNameDate>
            <UserName>
              {userName}
              {userId && <AreYouAuthor>*</AreYouAuthor>}
            </UserName>
            <MessageDate>{date}</MessageDate>
          </UserNameDate>
          <MessageFunction>
            {userId && <DeleteBtn>삭제하기</DeleteBtn>}
            {!userId && <AnswerBtn>답장하기</AnswerBtn>}
          </MessageFunction>
        </UserNameDateFunction>
        <MessageText>{content}</MessageText>
      </MessageWrapper>
    </Container>
  );
}
