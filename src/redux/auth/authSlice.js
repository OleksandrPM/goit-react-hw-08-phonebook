import { createSlice } from '@reduxjs/toolkit';
import { currentThunk, loginThunk, logoutThunk } from './authThunks';
import { resetContactsState } from 'redux/contacts/contactsSlice';
import { fetchContacts } from 'redux/contacts/contactsThunks';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  user: null,
};

const handleAllPending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleLoginFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.access_token = payload.token;
  fetchContacts();
};

const handleCurrentFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload;
};

const handleLogoutFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.access_token = '';
  state.user = null;
  resetContactsState();
};

//In the case of using "try-catch" and "rejectedError" it needs to use "payload" as the second argument
const handleAllRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleLoginFulfilled)
      .addCase(currentThunk.fulfilled, handleCurrentFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handleAllPending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleAllRejected);
  },
});

export const authReduser = authSlice.reducer;
