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
  onClickReply: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteData?: messagesProps;
}

export default function MessageContainer({
  data,
  onClickReply,
  onClickDelete,
  deleteData,
}: MessageContainerProps) {
  return (
    <div style={{ paddingBottom: '100px' }}>
      {data.map((item, i) => (
        <Message
          key={i}
          attr={item}
          onClickReply={onClickReply}
          onClickDelete={onClickDelete}
          deleteData={deleteData}
        />
      ))}
    </div>
  );
}
