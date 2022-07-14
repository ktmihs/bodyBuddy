import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserProps {
  value: {
    email: string;
    name: string;
    gender: boolean;
    signUpway: string;
  };
}

type SignInUserType = {
  name: string;
  email: string;
  gender: boolean;
  signUpway: string;
};

const initialState: UserProps = {
  value: {
    name: '',
    email: '',
    gender: true,
    signUpway: '',
  },
};

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    loginEmail: (state, action: PayloadAction<SignInUserType>) => {
      const { email, gender, signUpway, name } = action.payload;
      state.value.name = name;
      state.value.email = email;
      state.value.gender = gender;
      state.value.signUpway = signUpway;
    },
  },
});

export const { loginEmail } = userSlice.actions;
export default userSlice.reducer;
