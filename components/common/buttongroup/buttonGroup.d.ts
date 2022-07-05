interface post {
  content: string;
  creationDate: Date;
  fieldId: string;
  images: string | string[];
  title: string;
  totalComments: number;
  userId: string;
}

interface review {
  category: string;
  content: string;
  creationDate: Date;
  isActivation: boolean;
  rating: number;
  userId: string;
  trainerInfo: trainer;
}

interface trainer {
  trainerId: string;
  image: string;
  name: string;
  introduction: string;
}

interface EditorGroupProps {
  selectedItem: string;
  className: string;
  EditorURL?: string;
  lastEdited?: reveiw | post;
  onChangeEditingMode?: Dispatch<SetStateAction<boolean>>;
  onChangeDeleteMode: Dispatch<SetStateAction<boolean>>;
}
