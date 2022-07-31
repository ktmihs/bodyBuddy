interface trainerInfo {
  name: string;
  field: string;
  images: string[];
  introduction: string;
  purpose: string;
}

interface review {
  id: string;
  category: string;
  content: string;
  creationDate: string;
  isActivation: boolean;
  rating: number;
  userId: string;
  trainerId: string;
  trainer: trainerInfo;
}

interface ReviewProps {
  reviews: review[];
  setReviews: Dispatch<SetStateAction<reveiws[]>>;
  isEditable: boolean;
}
