interface trainerInfo {
  name: string;
  fieldId: string;
  images: string[];
  introduction: string;
  purposeId: string;
}

interface reveiw {
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
  reviews: reveiw[];
  setReviews: Dispatch<SetStateAction<reveiws[]>>;
  isEditable: boolean;
}
