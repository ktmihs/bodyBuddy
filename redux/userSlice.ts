import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserProps {
  value: {
    email: string;
    nickname: string;
    city: string;
    district: string;
  };
}

type SignUpUserInfoType = {
  email: string;
  nickname: string;
  city: string;
  district: string;
};

const initialState: UserProps = {
  value: {
    email: '',
    nickname: '',
    city: '',
    district: '',
  },
};

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    loginEmail: (state, action: PayloadAction<string>) => {
      state.value.email = action.payload;
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
