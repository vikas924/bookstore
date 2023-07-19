import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addbook: (state, action) => {
      state.book.push(action.payload);
    },
    removebook: (state, action) => {
      state.book = state.book.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addbook, removebook } = bookSlice.actions;

export default bookSlice.reducer;
