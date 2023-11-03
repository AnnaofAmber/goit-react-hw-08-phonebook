import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  refreshUser,
  setToken,
  userLogin,
  userLogout,
  userRegister,
} from 'services/api';
axios.defaults.baseURL = 'https://653927fee3b530c8d9e80563.mockapi.io';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await userLogin(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await userRegister(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const response = await refreshUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await userLogout();
      console.log(response);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
