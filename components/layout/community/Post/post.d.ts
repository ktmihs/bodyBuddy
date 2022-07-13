interface post {
  id: string;
  title: string;
  images: string[];
  totalComments: number;
  userId: string;
  content: string;
  fieldId: string;
  creationDate: string;
}

interface PostListProps {
  postList: post;
  setPostList: Dispatch<SetStateAction<object[]>>;
  selectedItem: string;
}
