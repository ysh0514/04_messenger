import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useFetch } from '../../hooks';
import { MessageListProps } from '../../utils/InterfaceSet';
import { MESSAGES_MOCK_DATA } from 'utils/messagesMockData';

const apiParams = { url: '/messages', method: 'GET', params: {} };

export default function Messenger() {
  const [messageList, setMessageList] = useState<Array<MessageListProps>>([]); // 모든 메세지
  const showModal = useSelector(
    (state: RootState) => state.switReducer.showModal
  );
  const userInfoState = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();

  const { response, onApiRequest } = useFetch(apiParams);

  useEffect(() => {
    if (!response) return;

    setMessageList(response.data);
  }, [response]);

  function onChange(type: string, data: object) {
    switch (type) {
      case 'message': // message 추가
        // onApiRequest({
        // 	method: 'PUT',
        // 	params: {
        // 		userId: 'test',
        // 		userName: 'user test',
        // 		profileImage': url,
        // 		content: '',
        // 		date: '2022-02-10'
        // 	}
        // })
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {/* {MESSAGES_MOCK_DATA.messages.map((item) => (
        <Message key={item.userId} attr={item} />
      ))} */}
    </div>
  );
}
