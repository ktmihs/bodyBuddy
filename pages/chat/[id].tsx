import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { chatCollection, makeQuery } from '@api/firebase';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';
import { Talks, GymInfo, TrainerInfo } from 'components/layout/chat';

const ChatContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.lightGray200};
`;

const ChatMessages = styled.section`
  position: relative;
  border-radius: 30px 30px 0 0;
  background-color: ${({ theme }) => theme.white};
  padding: 13px 21px 19px;
  flex-grow: 1;
`;

const ChatInputContainer = styled.div`
  form {
    position: absolute;
    display: flex;
    bottom: 19px;
    width: 90%;

    input {
      flex-grow: 1;
      height: 33px;
      border-radius: 10px;
      border: none;
      background-color: ${({ theme }) => theme.lightGray};
      padding: 0 13px;
    }

    button {
      flex-grow: 0;
      width: 30px;
      height: 30px;
      border: none;
      margin-left: 7px;
      background: url('/assets/common/send-button.png') no-repeat;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;

const Chat = () => {
  const router = useRouter();
  const { id } = router.query;

  const user = useSelector((state: RootState) => state.userSlice.value);
  const [snapshot, loading, error] = useCollection(chatCollection);
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const [messages] = useCollectionData(
    makeQuery({ id, option: 'timestamp', outerCollection: 'chat', innerCollection: 'messages' })
  );

  const [inputText, setInputText] = useState('');

  return (
    <ChatContainer>
      <TrainerInfo />
      <ChatMessages>
        <GymInfo img="" name="내가최고GYM" address="서울 강남구 강남대로 364 미왕빌딩 11층" />
        <Talks messages={messages} />
        <ChatInputContainer>
          <form>
            <input
              type="text"
              placeholder="메시지를 남겨주세요 :)"
              onChange={(e) => setInputText(e.target.value)}
            />
            <button></button>
          </form>
        </ChatInputContainer>
      </ChatMessages>
    </ChatContainer>
  );
};

export default Chat;
