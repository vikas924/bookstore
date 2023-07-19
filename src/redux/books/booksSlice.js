import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      const newstate = state.filter((item) => item.id !== action.payload);
      const updateIndex = newstate.map((item, index) => ({ ...item, id: index + 1 }));
      return updateIndex;
    },
  },
});

export const { add, remove } = bookSlice.actions;

export default bookSlice.reducer;
