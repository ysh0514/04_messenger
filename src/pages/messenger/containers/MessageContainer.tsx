import React from 'react';
import Message from '../components/Message';

export interface messagesProps {
  userId: string;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
}

interface MessageContainerProps {
  data: messagesProps[];
  ref: React.RefObject<HTMLDivElement>;
  onClick: () => void;
}

export default function MessageContainer({
  data,
  ref,
  onClick,
}: MessageContainerProps) {
  return (
    <div ref={ref}>
      {data.map((item) => (
        <Message key={item.userId} attr={item} onClick={onClick} />
      ))}
    </div>
  );
}
