import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserProps {
  value: {
    email: string;
    name: string;
    gender: boolean;
    signUpway: string;
    thumbnail: string;
    city: string;
    district: string;
  };
}

interface SignInUserType {
  name: string;
  email: string;
  gender: boolean;
  signUpway: string;
}

interface SignInAlreadyExistedType extends SignInUserType {
  city: string;
  district: string;
  thumbnail: string;
}

const initialState: UserProps = {
  value: {
    name: '',
    email: '',
    gender: true,
    signUpway: '',
    thumbnail: '',
    city: '',
    district: '',
  },
};

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    loginEmail: (state, action: PayloadAction<SignInUserType>) => {
      state.value = { ...state.value, ...action.payload };
    },
    loginEmailAlreadyExisted: (state, action: PayloadAction<SignInAlreadyExistedType>) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { loginEmail, loginEmailAlreadyExisted } = userSlice.actions;
export default userSlice.reducer;
