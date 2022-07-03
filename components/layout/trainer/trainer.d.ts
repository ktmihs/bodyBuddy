interface HeaderProps {
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
