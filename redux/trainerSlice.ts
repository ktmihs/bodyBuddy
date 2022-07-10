import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    name: '',
    images: [],
    field: '',
    purpose: '',
    address: '',
    city: '',
    district: '',
    gymImage: '',
    career: [],
    price: '',
    totalCareer: '',
    introduction: '',
  },
};

export const trainerSlice = createSlice({
  name: 'trainerInfo',
  initialState,
  reducers: {
    trainerSignUpstep1: (state, action) => {
      const { name, field, purpose, images, introduction } = action.payload;
      state.value.name = name;
      state.value.field = field;
      state.value.purpose = purpose;
      state.value.images = images;
      state.value.introduction = introduction;
    },
  },
});

export const { trainerSignUpstep1 } = trainerSlice.actions;
export default trainerSlice.reducer;
