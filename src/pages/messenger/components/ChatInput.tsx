import { useState, useEffect } from 'react';
import ChatInputStyle from 'assets/styles/ChatInputStyle';
import 'assets/images/sendMessage.png';
import { SEND_MESSAGE_ICON } from 'utils/ImageUtil';
import axios from 'axios';
import { RootState } from 'store/reducers';
import { useSelector } from 'react-redux';

const {
  ChatInputContainer,
  InputWrapper,
  TextArea,
  SendButton,
  SendIcon,
  EmptyBox,
} = ChatInputStyle;

interface MessageInfoProps {
  id: number;
  userId: string;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
}

interface replyDataProps {
  userName: string;
  content: string;
}

interface ChatInputProps {
  getData: () => void;
  replyMessage?: replyDataProps;
}

export default function ChatInput({
  getData,
  scrollToBottom,
  replyMessage,
}: any) {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [messageText, setMessageText] = useState(String);
  const WriteMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setButtonDisabled(false);
    setMessageText(e.target.value);
    if (e.target.value === '') {
      setButtonDisabled(true);
    }
  };
  const authInfo = useSelector((state: RootState) => state.authReducer);

  const sendMessage = () => {
    const moment = require('moment-timezone');

    if (messageText) {
      const chatInfo: MessageInfoProps = {
        id: Date.now(),
        userId: authInfo.userId,
        userName: authInfo.userName,
        profileImage: authInfo.profileImage,
        content: messageText,
        date: moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'),
      };
      axios
        .post('https://json-server-wanted14.herokuapp.com/messages', chatInfo)
        .then((res) => {
          getData();
        })
        .then((res) => {
          scrollToBottom();
        });

      setMessageText('');
      setButtonDisabled(true);
    }
  };

  const pressSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13 && !e.shiftKey) {
      sendMessage();
      e.preventDefault();
    }
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!replyMessage) return;
    if (replyMessage.content !== '') {
      setButtonDisabled(false);
      setMessageText(
        messageText +
          '\n' +
          '사용자 이름: ' +
          replyMessage.userName +
          '\n' +
          '채팅 내용: ' +
          replyMessage.content +
          '\n' +
          '회신: '
      );
    }
  }, [replyMessage]);

  return (
    <>
      <ChatInputContainer>
        <InputWrapper method="post" onSubmit={submit}>
          <TextArea
            onChange={WriteMessage}
            value={messageText}
            onKeyPress={pressSendMessage}
          />
          <SendButton onClick={sendMessage} disabled={buttonDisabled}>
            <SendIcon
              alt="전송 아이콘"
              src={SEND_MESSAGE_ICON}
              isDisabled={buttonDisabled}
            />
          </SendButton>
        </InputWrapper>
      </ChatInputContainer>
      <EmptyBox />
    </>
  );
}
