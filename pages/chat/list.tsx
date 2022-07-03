import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.article`
  padding-top: 20px;
`;

const ChatPreview = styled.section`
  display: flex;
  margin: 0 21px;
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
  padding-top: 13px;
  padding-bottom: 17px;

  .image-container {
    margin: 0 10px;

    img {
      border-radius: 50%;
    }
  }

  .chat-content {
    width: 80%;
  }
`;

const TrainerInfo = styled.div`
  position: relative;
  margin-bottom: 15px;

  .type {
    font-size: 8px;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.purple};
    border-radius: 10px;
    padding: 2px 5px;
    margin-right: 8px;
  }

  .name {
    font-size: 12px;
  }

  .time {
    position: absolute;
    right: 0;
    font-size: 10px;
    color: ${({ theme }) => theme.mediumGray};
  }
`;

const Message = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChatList = () => {
  return (
    <Container>
      <ChatPreview>
        <div className="image-container">
          <Image src="/assets/common/trainer.jpg" alt="트레이너" width={50} height={50} />
        </div>
        <div className="chat-content">
          <TrainerInfo>
            <span className="type">PT | 다이어트</span>
            <span className="name">최세민 트레이너</span>
            <span className="time">1시간 전</span>
          </TrainerInfo>
          <Message>
            안녕하세요. 저는 00구에 사는 주민입니다
            ㅁ눙러ㅏㅣ머ㅜㄴ아ㅣ럼ㄴ아ㅣ럼ㄴ이ㅏ렁리나ㅓㅁㄹㄴ아ㅣㅁㄹㅇ너
          </Message>
        </div>
      </ChatPreview>
    </Container>
  );
};

export default ChatList;
