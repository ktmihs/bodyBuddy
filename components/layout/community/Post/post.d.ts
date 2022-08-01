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
  selectedItem: string;
  setStartAfter: Dispatch<SetStateAction<QueryDocumentSnapshot<DocumentData>>>;
  startAfter: QueryDocumentSnapshot<DocumentData> | null;
  setPostList: Dispatch<SetStateAction<post[]>>;
  postList: post[];
}
