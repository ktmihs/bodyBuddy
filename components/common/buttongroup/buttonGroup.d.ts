interface post {
  id: string;
  content: string;
  creationDate: string;
  fieldId: string;
  images: string[];
  title: string;
  totalComments: number;
  userId: string;
}

interface editorProps {
  id?: string;
  content?: string;
  creationDate?: string;
  isActivation?: boolean;
  rating?: number;
  userId?: string;
  trainerId: string;
  images: string[];
  name: string;
  fieldId: string;
  introduction: string;
  purposeId: string;
}

interface EditorGroupProps {
  className: string;
  EditorURL?: string;
  lastEdited: editorProps | post;
  onChangeEditingMode?: Dispatch<SetStateAction<boolean>>;
  onChangeDeleteMode: Dispatch<SetStateAction<boolean>>;
}
