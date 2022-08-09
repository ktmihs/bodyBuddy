import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: {
    email: '',
    name: '',
    signUpway: '',
    images: ['', '', ''],
    field: '',
    purpose: '',
    address: '',
    city: '',
    district: '',
    gymImage: '',
    gymName: '',
    gender: true,
    careers: {},
    price: 0,
    introduction: '',
    careerStartMonth: 0,
    careerStartYear: 0,
    isOnline: false,
  },
};

interface TrainerSignUpStep1 {
  field: string;
  purpose: string;
  images: Array<string>;
  introduction: string;
}

interface TrainerSignUpStep2 {
  gymName: string;
  gymImage: string;
  address: string;
  city: string;
  district: string;
}

interface CareerType {
  id?: number;
  content?: string;
  image?: string;
  isApproval?: boolean;
}

interface TrainerSignUpStep3 {
  price: number;
  careerStartMonth: number;
  careerStartYear: number;
  careers: Array<CareerType>;
}

interface LoginTrainerAlreadyExisted
  extends TrainerSignUpStep1,
    TrainerSignUpStep2,
    TrainerSignUpStep3 {
  email: string;
  name: string;
  signUpway: 'kakao' | 'naver';
  gender: boolean;
  isOnline: boolean;
}

export const trainerSlice = createSlice({
  name: 'trainerInfo',
  initialState,
  reducers: {
    loginTrainerAlreadyExisted: (state, action: PayloadAction<LoginTrainerAlreadyExisted>) => {
      state.value = { ...state.value, ...action.payload };
    },
    trainerSignUpstep1: (state, action: PayloadAction<TrainerSignUpStep1>) => {
      state.value = { ...state.value, ...action.payload };
    },
    trainerSignUpstep2: (state, action: PayloadAction<TrainerSignUpStep2>) => {
      state.value = { ...state.value, ...action.payload };
    },
    trainerSignUpstep3: (state, action: PayloadAction<TrainerSignUpStep3>) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { loginTrainerAlreadyExisted, trainerSignUpstep1 } = trainerSlice.actions;
export default trainerSlice.reducer;
