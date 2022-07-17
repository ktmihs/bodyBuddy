interface post {
  content: string;
  creationDate: Date;
  fieldId: string;
  images: string | string[];
  title: string;
  totalComments: number;
  userId: string;
}

interface editorProps {
  id?: string;
  content?: string;
  creationDate?: Date;
  isActivation?: boolean;
  rating?: number;
  userId?: string;
  trainerId: string;
  image: string[];
  name: string;
  fieldId: string;
  introduction: string;
  purposeId: string;
}

interface EditorGroupProps {
  className: string;
  EditorURL?: string;
  lastEdited: editorProps;
  onChangeEditingMode?: Dispatch<SetStateAction<boolean>>;
  onChangeDeleteMode: Dispatch<SetStateAction<boolean>>;
}
