import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteAllApi,
  deleteContactApi,
  getContactsApi,
} from 'contacts-api/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContactsApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await addContactApi({ name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await deleteContactApi(contactId);
      return response.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Too much requests problem
export const deleteAll = createAsyncThunk(
  'contacts/deleteAll',
  async (contacts, thunkAPI) => {
    try {
      const response = await deleteAllApi(contacts);
      console.log(response); //del
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
