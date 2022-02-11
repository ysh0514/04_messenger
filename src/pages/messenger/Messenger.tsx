import { Modal } from 'components';
import React, { useEffect, useRef } from 'react';
import { MESSAGES_MOCK_DATA } from 'utils/messagesMockData';
import ChatInput from './components/ChatInput';
import Header from './components/Header';
import Message from './components/Message';
import MessageContainer from './containers/MessageContainer';

export default function Messenger() {
  const latestConversationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (latestConversationRef.current === null) return;
    latestConversationRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, [MESSAGES_MOCK_DATA.messages]);

  const onChange = () => {};
  const onClick = () => {};
  return (
    <div>
      <Header></Header>
      <MessageContainer
        data={MESSAGES_MOCK_DATA.messages}
        ref={latestConversationRef}
        onClick={onClick}
      />
      <ChatInput onChange={onChange} />
    </div>
  );
}
