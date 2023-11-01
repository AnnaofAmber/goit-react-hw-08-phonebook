import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
