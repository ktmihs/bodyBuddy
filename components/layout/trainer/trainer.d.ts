interface HeaderProps {
  trainer: TrainerProps;
  state: string;
  liked: boolean;
  onClickSetLiked: (boolean) => void;
}

interface ImageViewerProps {
  images: string[];
  handleClick?: (e: MouseEvent<HTMLDivElement>) => void;
  len: number;
}

interface reviewProps {
  id: number;
  userId: number;
  creationDate: Date;
  rating: number;
  trainerId: number;
  image: string[];
  category: string;
  content: string;
  isActivation: boolean;
}

interface BodyProps {
  trainer: TrainerProps;
  reviews: reviewProps[];
}

interface TrainerProps {
  id: string;
  address: string;
  city: string;
  district: string;
  introduction: string;
  isOnline: boolean;
  name: string;
  phoneNumber: string;
  signUpway: string;
  totalCareer: Date;
  field: string;
  purpose: string;
  profileUrl: string;
  images: string[];
  gym: string[];
  careers: CareerProps[];
  cost: string;
}

interface TrainerSetProps {
  setField: Dispatch<SetStateAction<string>>;
  setPurpose: Dispatch<SetStateAction<string>>;
  setProfileUrl: Dispatch<SetStateAction<string>>;
  setImagesUrl: Dispatch<SetStateAction<string[]>>;
  setGymUrl: Dispatch<SetStateAction<string[]>>;
  setCareers: Dispatch<SetStateAction<CareerProps[]>>;
  setCost: Dispatch<SetStateAction<string>>;
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
