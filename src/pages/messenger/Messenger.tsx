import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useFetch } from '../../hooks';
import { MessageContainer, Header, ChatInput } from '../';
import { MessageListProps } from '../../utils/InterfaceSet';

const apiParams = { url: '/messages', method: 'GET', params: {} };

interface MessagengerProps {
  userId: string;
  profileImage: string;
}

interface ChatInputProps {
  content: string;
  date: string;
}

export default function Messenger({ userId, profileImage }: MessagengerProps) {
  const [messageList, setMessageList] = useState<Array<MessageListProps>>([]); // 모든 메세지.
  const [sendMessageInfo, setSendMessageInfo] = useState<object>({});
  const showModal = useSelector(
    (state: RootState) => state.switReducer.showModal
  );

  const { response, onApiRequest } = useFetch(apiParams);

  useEffect(() => {
    if (!response) return;

    setMessageList(response.data);
  }, [response]);

  function onChange(type: string, data: any) {
    switch (type) {
      case 'message': // message 추가
        onApiRequest({
          ...apiParams,
          method: 'POST',
          params: {
            userId: 'test',
            userName: 'user test',
            profileImage: 'url',
            content: data.text,
            date: data.date,
          },
        });
        break;
      case 'sendMessageInfo':
        setSendMessageInfo(data);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {/* <Header />
      <MessageContainer /> */}
      <ChatInput onChange={onChange} />
    </div>
  );
}
