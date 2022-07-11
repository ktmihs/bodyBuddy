interface CareerProps {
  id: string;
  content: string;
  image: string;
  isApproval: boolean;
}

interface CareersProps {
  careers: CareerProps[];
  setCareers: Dispatch<SetStateAction<CareerProps>>;
}
