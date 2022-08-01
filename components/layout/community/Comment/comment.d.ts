interface comment {
  communityId: string;
  content: string;
  creationDate: string;
  id: string;
  nickname: string;
  userId: string;
}

interface commentType {
  postId: string;
  comments: comment[];
  setComments: Dispatch<SetStateAction<comments[]>>;
}
