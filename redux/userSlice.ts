import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserProps {
  value: {
    email: string;
    gender: boolean;
    nickname: string;
    city: string;
    district: string;
  };
}

type SignInUserType = {
  email: string;
  gender: boolean;
};

type SignUpUserInfoType = {
  nickname: string;
  city: string;
  district: string;
};

const initialState: UserProps = {
  value: {
    email: '',
    gender: true,
    nickname: '',
    city: '',
    district: '',
  },
};

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    loginEmail: (state, action: PayloadAction<SignInUserType>) => {
      const { email, gender } = action.payload;
      state.value.email = email;
      state.value.gender = gender;
    },
    signUpUser: (state, action: PayloadAction<SignUpUserInfoType>) => {
      const { nickname, city, district } = action.payload;
      state.value.nickname = nickname;
      state.value.city = city;
      state.value.district = district;
    },
  },
});

export const { loginEmail, signUpUser } = userSlice.actions;
export default userSlice.reducer;
