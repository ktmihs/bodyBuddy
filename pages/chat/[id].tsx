import styled from '@emotion/styled';
import { Talk, GymInfo, TrainerInfo } from 'components/layout/chat';

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

const HorizonLine = styled.div`
  background-color: ${({ theme }) => theme.lineGray};
  height: 1px;
  position: relative;
  margin-bottom: 20px;

  time {
    position: absolute;
    left: 50%;
    top: -500%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.mediumGray};
    font-size: 10px;
    padding: 0 10px;
  }
`;

const ChatInputContainer = styled.div`
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
`;

const Chat = () => {
  return (
    <ChatContainer>
      <TrainerInfo />
      <ChatMessages>
        <GymInfo img="" name="내가최고GYM" address="서울 강남구 강남대로 364 미왕빌딩 11층" />
        <div>
          <Talk
            content="안녕하세요 :) 다이어트를 책임지는 최세민 트레이너입니다. 문의 말씀 남겨주시면 최대한
            빠르게 답변 드리겠습니다!"
            time="09: 30 AM"
            type="trainer"
          />
          <Talk
            content="안녕하세요. 저는 00구에서 사는 주민입니다. 토요일, 일요일 2시간씩 가능할까요?"
            time="11:30 PM"
            type="me"
          />
          <HorizonLine>
            <time>2020년 3월 2일 (일)</time>
          </HorizonLine>
          <Talk
            content="최세민 트레이너와의 상담 혹은 수업이 만족되셨나요? 그렇다면 트레이너님의 후기를 남겨주세요 :)"
            time="11:30 PM"
            type="info"
          />
        </div>
        <ChatInputContainer>
          <input type="text" placeholder="메시지를 남겨주세요 :)" />
          <button></button>
        </ChatInputContainer>
      </ChatMessages>
    </ChatContainer>
  );
};

export default Chat;
