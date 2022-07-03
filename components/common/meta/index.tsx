import Image from 'next/image';
import { CommentInfo, PostMeta } from './styledMetaContainer';

export const PostMetaInfo = ({ nickname, dateTime, className }: PostMetaProps) => {
  return (
    <PostMeta className={className}>
      <span>{nickname}</span>
      <time dateTime={dateTime?.toISOString()}>
        {className === 'review' ? '2022.06.09' : '1분 전'}
      </time>
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
