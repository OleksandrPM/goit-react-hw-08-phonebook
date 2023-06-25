import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './authThunks';

const initialState = { access_token: '', isLoading: false, error: '' };

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.access_token = payload.token;
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected);
  },
});
