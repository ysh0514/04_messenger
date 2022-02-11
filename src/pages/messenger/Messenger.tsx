import React from 'react';
import { MESSAGES_MOCK_DATA } from 'utils/messagesMockData';
import Message from './components/Message';

export default function Messenger() {
  return (
    <div>
      {MESSAGES_MOCK_DATA.messages.map((item) => (
        <Message key={item.userId} attr={item} />
      ))}
    </div>
  );
}
