import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import styled from '@emotion/styled';
import Talk from './Talk';
import { DocumentData } from 'firebase/firestore/lite';

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

interface Props {
  messages: DocumentData[] | undefined;
}

const Talks = ({ messages }: Props) => {
  const user = useSelector((state: RootState) => state.userSlice.value);
  console.log(user);

  return (
    <div>
      {messages?.map(({ sender, text, timestamp }: DocumentData) => (
        <Talk
          key={timestamp.toDate().toString()}
          content={text}
          time={timestamp.toDate().toString()}
          type={sender === 'luna238@naver.com' ? 'me' : 'trainer'}
        />
      ))}
      {/* <Talk
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
      /> */}
    </div>
  );
};

export default Talks;
