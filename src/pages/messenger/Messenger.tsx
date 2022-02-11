import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useFetch } from '../../hooks';
import { MessageListProps, replyProps } from '../../utils/InterfaceSet';
import { MESSAGES_MOCK_DATA } from 'utils/messagesMockData';
import Header from './components/Header';
import ChatInput from './components/ChatInput';
import MessageContainer from './containers/MessageContainer';

const apiParams = { url: '/messages', method: 'GET', params: {} };

export default function Messenger() {
  const latestConversationRef = useRef<HTMLDivElement>(null);
  const [isReply, setIsReply] = useState(false);
  const [replyMessage, setReplyMessage] = useState<replyProps>();
  const [deleteMessage, setDeleteMessage] = useState<MessageListProps>();
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

  useEffect(() => {
    if (latestConversationRef.current === null) return;
    latestConversationRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, [MESSAGES_MOCK_DATA.messages]);

  const CHAT = 'chat';
  const REPLY = 'reply';
  const DELETE = 'delete';

  function onChange(type: string, data?: object) {
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
      case CHAT:
        return;
      default:
        break;
    }
  }

  function onClick(e: React.MouseEvent<HTMLButtonElement>, type: string) {
    switch (type) {
      case REPLY: {
        const findMessageObject = MESSAGES_MOCK_DATA.messages.find(
          (item) => item.date === e.currentTarget.id
        );
        // console.log(findMessageObject);
        if (!findMessageObject) return;
        if (replyMessage?.content === findMessageObject?.content) {
          setIsReply((prev) => !prev);
        } else {
          setIsReply(true);
        }
        const newObj = {
          userName: findMessageObject?.userName,
          content: findMessageObject?.content,
          isReply,
        };
        setReplyMessage(newObj);
        console.log(newObj);

        // console.log(findMessage);
        return; // 쇼 모달 트루로 변함
      }
      case DELETE: {
        const findMessageObject = MESSAGES_MOCK_DATA.messages.find(
          (item) => item.date === e.currentTarget.id
        );
        setDeleteMessage(findMessageObject);
        console.log(findMessageObject);
        // console.log(findMessage);
        //유저의 메세지를 띄워야함
        return;
      }
      default:
        break;
    }
  }

  return (
    <div>
      <Header />
      <MessageContainer
        data={MESSAGES_MOCK_DATA.messages}
        WrapperRef={latestConversationRef}
        onClickReply={(e) => onClick(e, REPLY)}
        onClickDelete={(e) => onClick(e, DELETE)}
      />
      <ChatInput onChange={() => onChange(CHAT)} />
    </div>
  );
}
