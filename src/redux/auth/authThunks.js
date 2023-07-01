import { createAsyncThunk } from '@reduxjs/toolkit';
import { current, login, logout, signup } from 'contacts-api/auth-api';
import { fetchContacts } from 'redux/contacts/contactsThunks';

export const signupThunk = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue, dispatch }) => {
    try {
      const data = await signup(user);
      dispatch(fetchContacts());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const currentThunk = createAsyncThunk('auth/current', () => current());

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue, dispatch }) => {
    try {
      const data = await login(user);
      dispatch(currentThunk());
      dispatch(fetchContacts());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('auth/logout', () => logout());
