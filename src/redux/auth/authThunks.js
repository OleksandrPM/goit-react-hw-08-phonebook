import { createAsyncThunk } from '@reduxjs/toolkit';
import { current, login } from 'contacts-api/auth';

export const currentThunk = createAsyncThunk('auth/current', () => current());

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue, dispatch }) => {
    try {
      const data = await login(user);
      dispatch(currentThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
