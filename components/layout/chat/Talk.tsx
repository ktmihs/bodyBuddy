import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const Message = styled.div<Pick<TalkProps, 'type'>>`
  width: 216px;
  padding: 12px 14px;
  margin-bottom: 5px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 17px;
  margin-left: ${({ type }) => (type === 'trainer' ? '0px' : 'auto')};
  margin-right: ${({ type }) => (type === 'trainer' ? 'auto' : '0px')};
  color: ${({ type, theme }) => (type === 'me' ? theme.white : theme.black)};
  background-color: ${({ type, theme }) =>
    type === 'me' ? theme.purple : type === 'trainer' ? theme.lightGray : theme.white};
`;

const Time = styled.time<Pick<TalkProps, 'type'>>`
  color: ${({ theme }) => theme.mediumGray};
  font-size: 10px;
  float: ${({ type }) => (type === 'trainer' ? 'left' : 'right')};
`;

const ReviewButton = styled.button`
  position: absolute;
  right: 0;
  bottom: -40px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.lightBlue};
  font-size: 10px;
  padding: 5px 8px;
  border: none;
  border-radius: 10px;
  float: right;
`;

interface TalkProps {
  content: string;
  time: string;
  type: 'me' | 'trainer' | 'info';
}

const Talk = ({ content, time, type }: TalkProps) => {
  return (
    <Container>
      <Message type={type}>{content}</Message>
      <Time type={type}>{time}</Time>
      {type === 'info' && <ReviewButton>후기 남기기</ReviewButton>}
    </Container>
  );
};

export default Talk;
