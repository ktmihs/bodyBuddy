interface PostMetaProps {
  nickname: string;
  time: Date;
  className: string;
  displayByDate: boolean;
}
interface CountProps {
  like: number;
  comment: number;
  isClicked: boolean;
  toggleLiked?: (value: boolean) => void;
  width?: number;
  height?: number;
}
