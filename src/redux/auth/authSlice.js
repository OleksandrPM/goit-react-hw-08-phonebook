import { createSlice } from '@reduxjs/toolkit';
import { currentThunk, loginThunk } from './authThunks';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  user: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.access_token = payload.token;
};

const handleFulfilledUser = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload;
};

//In the case of using "try-catch" and "rejectedError" it needs to use "payload" as the second argument
const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(currentThunk.fulfilled, handleFulfilledUser)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReduser = authSlice.reducer;
