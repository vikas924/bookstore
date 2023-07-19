import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkstatus: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? 'Under construction' : state.categories;
    },
  },
});

export const { checkstatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
