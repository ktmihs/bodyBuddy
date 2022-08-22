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
  creationDate: Date;
  userId: string;
  rating: number;
  trainerId: string;
  category: string;
  content: string;
  isActivation: boolean;
}

interface BodyProps {
  id: string;
  trainer: TrainerProps;
  reviews: reviewProps[];
}

interface TrainerProps {
  id?: string;
  name?: string;
  phoneNumber?: string;
  signUpway?: string;
  careerStartYear: number;
  careerStartMonth: number;

  gender: boolean;
  address: string;
  introduction: string;
  isOnline: boolean;
  field: string;
  purpose: string;
  profileUrl: string;
  images: string[];
  gymUrl: string;
  careers: CareerProps[];
  price: string;
}

interface TrainerSetProps {
  setField: Dispatch<SetStateAction<string>>;
  setPurpose: Dispatch<SetStateAction<string>>;
  setProfileUrl: Dispatch<SetStateAction<string>>;
  setImagesUrl: Dispatch<SetStateAction<string[]>>;
  setGymUrl: Dispatch<SetStateAction<string>>;
  setCareers: Dispatch<SetStateAction<CareerProps[]>>;
  setPrice: Dispatch<SetStateAction<string>>;
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
