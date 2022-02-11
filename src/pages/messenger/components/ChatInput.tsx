import React, { useState } from 'react';
import ChatInputStyle from 'assets/styles/ChatInputStyle';

const { InputWrapper, TextArea, SendButton, SendIcon } = ChatInputStyle;

export default function ChatInput() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [messageText, setMessageText] = useState('');

  const WriteMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setButtonDisabled(false);
    setMessageText(e.target.value);
  };

  const sendMessage = () => {
    if (messageText) {
      const date = new Date();
      const messageInfo = {
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
    }
  };

  return (
    <InputWrapper>
      <TextArea
        onChange={WriteMessage}
        value={messageText}
        onKeyPress={pressSendMessage}
      />
      <SendButton onClick={sendMessage} disabled={buttonDisabled}>
        {/* <SendIcon
          alt="전송 아이콘"
          src="../../../assets/images/send-message.png"
        /> */}
        전송
      </SendButton>
    </InputWrapper>
  );
}
