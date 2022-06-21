import { Talk, GymInfo } from 'components/layout/chat';

const Chat = () => {
  return (
    <article>
      <section>
        <button></button>
        <img src="" alt={'트레이너'} />
        <div>
          <span>다이어트</span>
          <span>PT | 최세민트레이너</span>
        </div>
      </section>
      <section>
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
          <div>
            <time>2020년 3월 2일 (일)</time>
          </div>
          <Talk
            content="최세민 트레이너와의 상담 혹은 수업이 만족되셨나요? 그렇다면 트레이너님의 후기를 남겨주세요 :)"
            time="11:30 PM"
            type="info"
          />
        </div>
        <div>
          <input type="text" placeholder="메시지를 남겨주세요 :)" />
          <button></button>
        </div>
      </section>
    </article>
  );
};

export default Chat;
