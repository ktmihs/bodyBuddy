interface post {
  id: string;
  title: string;
  images: string[];
  totalComments: number;
  userId: string;
  content: string;
  field: string;
  creationDate: string | Date;
  nickname: string;
}

interface PostListProps {
  postList: post[];
}
