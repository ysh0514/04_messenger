import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useFetch } from '../../hooks';
import { MessageListProps } from '../../utils/InterfaceSet';

const apiParams = { url: '/messages', method: 'GET', params: {} };

export default function Messenger({ userId: string, profileImage: string }) {
  const [messageList, setMessageList] = useState<Array<MessageListProps>>([]); // 모든 메세지
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
      default:
        break;
    }
  }

  return (
    <div>
      {/**
       * 여기에 각 컴포넌트 넣어주세요
       */}
    </div>
  );
}
