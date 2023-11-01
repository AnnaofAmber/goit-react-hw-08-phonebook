import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
    user:{name: null, email: null},
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder =>
   {
    builder
    .addCase(registerThunk.pending, handlePending)
    .addCase(registerThunk.fulfilled, (state, action)=> {
      state.isLoading = false;
      state.error = null;
      state.isLoggedIn = true
      state.token = action.payload.token
      state.user = action.payload.user
    })
    .addCase(registerThunk.rejected, handleRejected)

    .addCase(loginThunk.pending, handlePending)
    .addCase(loginThunk.fulfilled, (state, action)=> {
      state.isLoading = false;
      state.error = null;
      state.isLoggedIn = true
      state.token = action.payload.token
      state.user = action.payload.user
    })
    .addCase(loginThunk.rejected, handleRejected)



}});



  
export const authReducer = authSlice.reducer;
