import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filterSelectors';

export const selectContacts = state => state.contacts;
export const selectItems = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    if (filter === '') {
      return items;
    } else {
      return items.filter(item => item['name'].toLowerCase().includes(filter));
    }
  }
);
