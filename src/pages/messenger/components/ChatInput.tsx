import React, { useState } from 'react';
import ChatInputStyle from 'assets/styles/ChatInputStyle';
import 'assets/images/sendMessage.png';
import { SEND_MESSAGE_ICON } from 'utils/ImageUtil';
const { InputWrapper, TextArea, SendButton, SendIcon } = ChatInputStyle;

interface MessageInfoProps {
  text: string;
  date: Date;
}

export default function ChatInput() {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [messageText, setMessageText] = useState(String);

  const WriteMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setButtonDisabled(false);
    setMessageText(e.target.value);
    if (e.target.value === '') {
      setButtonDisabled(true);
    }
  };

  const sendMessage = () => {
    if (messageText) {
      const date = new Date();
      const messageInfo: MessageInfoProps = {
        text: messageText,
        date: date,
      };
      console.log(messageInfo);
      setMessageText('');
      setButtonDisabled(true);
    }
  };

  const pressSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter') {
      sendMessage();
      e.preventDefault();
    }
  };

  const test1 = (e: any) => {
    e.preventDefault();
  };

  return (
    <InputWrapper method="post" onSubmit={test1}>
      <TextArea
        onChange={WriteMessage}
        value={messageText}
        onKeyPress={pressSendMessage}
      />
      <SendButton onClick={sendMessage} disabled={buttonDisabled}>
        {/* <SendIcon alt="전송 아이콘" src={SEND_MESSAGE_ICON} /> */}전송
      </SendButton>
    </InputWrapper>
  );
}
