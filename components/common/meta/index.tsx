import Image from 'next/image';
import { LikeAndCommentInfo, PostMeta } from './styledMetaContainer';

export const PostMetaInfo = ({ nickname, time, className }: PostMetaProps) => {
  return (
    <PostMeta className={className}>
      <span>{nickname}</span>
      <time dateTime={time.toISOString()}>1분 전</time>
    </PostMeta>
  );
};

export const LikeAndCommentCount = ({
  like,
  comment,
  isClickable,
  isClicked,
  width,
  height,
}: CountProps) => {
  return (
    <LikeAndCommentInfo>
      <Image
        src={isClicked ? '/assets/common/love.svg' : '/assets/common/love-blank.svg'}
        alt="좋아요"
        width={width ? width : 15}
        height={height ? height : 15}
      ></Image>
      <span>{like}</span>
      <Image src="/assets/community/speech.svg" alt="댓글" width={15} height={15}></Image>
      <span>{comment}</span>
    </LikeAndCommentInfo>
  );
};
