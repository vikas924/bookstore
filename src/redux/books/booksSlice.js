import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const booksurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pmhJKV1HbW4xOqPcfJNM/books';

const initialState = {
  book: [],
  isLoading: true,
  error: false,
};

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  try {
    const response = await axios.get(booksurl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch book');
  }
});

export const postBooks = createAsyncThunk('book/postBooks', async (data) => {
  try {
    const response = await axios.post(booksurl, {
      item_id: data.item_id,
      title: data.title,
      author: data.author,
      category: 'Book',
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to post book');
  }
});

export const removeapibook = createAsyncThunk('books/removeapibook', async (id) => {
  const removeurl = `${booksurl}/${id}`;
  try {
    const response = await axios.delete(removeurl, {
      item_id: id,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete book');
  }
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        book: (Object.keys(action.payload).map((key) => ({
          ...action.payload[key][0],
          item_id: key,
        }))),
      })).addCase(fetchBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export const { addbook, removebook } = bookSlice.actions;

export default bookSlice.reducer;
