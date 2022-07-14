interface usertype {
  nickname?: string;
  name?: string;
  email: string;
  gender: boolean;
  city: string;
  district: string;
  signUpway: string;
}

interface postingType {
  content: string;
  creationDate: Date;
  fieldId: string;
  images: string[];
  title: string;
  totalComments: number;
  userId: string;
}

interface MakeQueryParam {
  id: string | string[] | undefined;
  option?: any;
  outerCollection: string;
  innerCollection: string;
}

export type { usertype, postingType, MakeQueryParam };
