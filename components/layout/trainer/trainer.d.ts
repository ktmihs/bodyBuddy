interface HeaderProps {
  trainer: {
    id: number;
    online: boolean;
  };
  state: string;
  liked: boolean;
  onClickSetLiked: (boolean) => void;
}

interface reviewProps {
  id: number;
  userId: number;
  creationDate: Date;
  rating: number;
  trainerId: number;
  image: string;
  category: string;
  content: string;
  isActivation: boolean;
}

interface BodyProps {
  careers: string[];
  reviews: reviewProps[];
  address: string;
  images: string[];
}

interface TrainerProps {
  field: string;
  purpose: string;
  profileUrl: string;
  imagesUrl: string[];
  gymUrl: string[];
}

interface TrainerSetProps {
  setField: Dispatch<SetStateAction<string>>;
  setPurpose: Dispatch<SetStateAction<string>>;
  setProfileUrl: Dispatch<SetStateAction<string>>;
  setImagesUrl: Dispatch<SetStateAction<string[]>>;
  setGymUrl: Dispatch<SetStateAction<string[]>>;
}

interface EditProps {
  trainerState: TrainerProps;
  trainerSetState: TrainerSetProps;
}

interface TrainerModalProps {
  images: string[];
  initialslider: number;
  onClickSetModal: Dispatch<SetStateAction<boolean>>;
}
