import styled from 'styled-components';

const ChatInputContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

const InputWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  border-radius: 4px;
  background: white;
`;

const TextArea = styled.textarea`
  margin-left: 10px;
  resize: none;
  width: 100%;
  height: 80%;
  border: none;
  font-size: 15px;
  outline: none;
`;

const SendButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;

  width: 50px;
  height: 50px;
`;

const SendIcon = styled.img<{ isDisabled: boolean }>`
  width: 30px;
  height: 30px;
  filter: ${(props) => (props.isDisabled ? 'invert(50%)' : '')};
`;

const ChatInputStyle = {
  InputWrapper,
  TextArea,
  SendButton,
  SendIcon,
  ChatInputContainer,
};

export default ChatInputStyle;
