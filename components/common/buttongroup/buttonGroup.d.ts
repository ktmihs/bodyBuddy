interface post {
  id: string;
  content: string;
  creationDate: string;
  field: string;
  images: string[];
  title: string;
  totalComments: number;
  userId: string;
}

interface EditorGroupProps {
  className: string;
  EditorURL?: string;
  lastEdited: reveiw | post;
  onChangeEditingMode?: Dispatch<SetStateAction<boolean>>;
  onChangeDeleteMode: Dispatch<SetStateAction<boolean>>;
}
