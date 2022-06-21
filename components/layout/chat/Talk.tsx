interface TalkProps {
  content: string;
  time: string;
  type: 'me' | 'trainer' | 'info';
}

const Talk = ({ content, time, type }: TalkProps) => {
  return (
    <>
      <div>{content}</div>
      <time>{time}</time>
      {type === 'info' && <button>후기 남기기</button>}
    </>
  );
};

export default Talk;
