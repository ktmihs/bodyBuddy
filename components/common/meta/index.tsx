import Image from 'next/image';
import { CommentInfo, PostMeta } from './styledMetaContainer';

export const PostMetaInfo = ({ nickname, dateTime, className }: PostMetaProps) => {
  const calculateDate = (date: Date) => {
    if (className === 'review') return date.toISOString().slice(0, 10).replaceAll('-', '.');
    const now = new Date();
    let diff = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
    if (diff >= 7) return date.toISOString().slice(0, 10).replaceAll('-', '.');

    if (diff >= 1) return Math.floor(diff) + '일 전';
    diff = diff * 24;
    if (diff >= 1) return Math.floor(diff) + '시간 전';
    diff = diff * 60;
    if (diff >= 1) return Math.floor(diff) + '분 전';
    return '방금 전';
  };

  return (
    <PostMeta className={className}>
      <span>{nickname}</span>
      <time dateTime={dateTime?.toISOString()}>{calculateDate(dateTime)}</time>
    </PostMeta>
  );
};

export const CommentCount = ({ comment, width, height }: CountProps) => {
  return (
    <CommentInfo>
      <Image
        src="/assets/community/speech.svg"
        alt="댓글"
        width={width ? width : 15}
        height={height ? height : 15}
      ></Image>
      <span>{comment}</span>
    </CommentInfo>
  );
};
