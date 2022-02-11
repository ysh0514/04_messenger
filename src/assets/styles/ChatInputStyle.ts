import styled from 'styled-components';
const InputWrapper = styled.form`
  display: flex;
  width: 100%;
  height: 50px;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 70%;
`;

const SendButton = styled.button`
  /* background: blue; */
  /* border: none; */
  cursor: pointer;
  width: 50px;
`;

const SendIcon = styled.img``;

const ChatInputStyle = { InputWrapper, TextArea, SendButton, SendIcon };

export default ChatInputStyle;
