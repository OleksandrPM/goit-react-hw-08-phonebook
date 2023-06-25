import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from 'contacts-api/auth';

export const loginThunk = createAsyncThunk('auth/login', user => {
  return login(user);
});
