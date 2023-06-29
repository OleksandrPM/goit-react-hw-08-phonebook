import { createAsyncThunk } from '@reduxjs/toolkit';
import { current, login, logout } from 'contacts-api/auth-api';

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

export const logoutThunk = createAsyncThunk('auth/logout', () => logout());
