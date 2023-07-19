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
      state.book = state.book.filter((book) => book.id !== action.id);
    },
  },
});

export const { addbook, removebook } = bookSlice.actions;

export default bookSlice.reducer;
