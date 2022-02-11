import React, { useState } from 'react';
import ChatInputStyle from 'assets/styles/ChatInputStyle';
import 'assets/images/sendMessage.png';
import { SEND_MESSAGE_ICON } from 'utils/ImageUtil';

const { InputWrapper, TextArea, SendButton, SendIcon } = ChatInputStyle;

interface MessageInfoProps {
  text: string;
  date: Date;
}

interface ChatProps {
  onChange: (chatInfo: object) => void;
}

export default function ChatInput({ onChange }: ChatProps) {
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
      const chatInfo: MessageInfoProps = {
        text: messageText,
        date: new Date(),
      };
      onChange(chatInfo);
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

  return (
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
  );
}
