import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addbook: (state, action) => {
      state.book.push(action.payload);
    },
    removebook: (state, action) => {
      state.book = state.book.filter((item) => item.item_id !== action.payload);
    },
  },
});

export const { addbook, removebook } = bookSlice.actions;

export default bookSlice.reducer;
