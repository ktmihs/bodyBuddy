import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserProps {
  value: {
    email: string;
    gender: boolean;
    tumbnail: string;
    signUpway: string;
  };
}

type SignInUserType = {
  email: string;
  gender: boolean;
  signUpway: string;
};

const initialState: UserProps = {
  value: {
    email: '',
    gender: true,
    tumbnail: '',
    signUpway: '',
  },
};

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    loginEmail: (state, action: PayloadAction<SignInUserType>) => {
      const { email, gender, signUpway } = action.payload;
      state.value.email = email;
      state.value.gender = gender;
      state.value.signUpway = signUpway;
    },
  },
});

export const { loginEmail } = userSlice.actions;
export default userSlice.reducer;
