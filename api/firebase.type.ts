export interface usertype {
  nickname?: string;
  name?: string;
  email: string;
  gender: boolean;
  city: string;
  district: string;
  signUpway: string;
}

export interface postingType {
  content: string;
  creationDate: Date;
  fieldId: string;
  images: string[];
  title: string;
  totalComments: number;
  userId: string;
}
