interface reveiw {
  id: string;
  category: string;
  content: string;
  creationDate: string;
  isActivation: boolean;
  rating: number;
  userId: string;
  trainerId: string;
  name: string;
  fieldId: string;
  images: string[];
  introduction: string;
  purposeId: string;
}

interface ReviewProps {
  reviews: reveiw[];
  setReviews: Dispatch<SetStateAction<reveiws[]>>;
  isEditable: boolean;
}
