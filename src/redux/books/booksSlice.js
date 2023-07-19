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
      const newstate = state.book.filter((item) => item.id !== action.payload);
      return { book: newstate };
    },
  },
});

export const { addbook, removebook } = bookSlice.actions;

export default bookSlice.reducer;
