import { createSelector } from '@reduxjs/toolkit';

const selectPhonebook = state => state.phonebook;

export const selectContacts = createSelector(
  selectPhonebook,
  phonebook => phonebook.contacts
);
export const selectContactsIsLoading = createSelector(
  selectPhonebook,
  phonebook => phonebook.isLoading
);
export const selectContactsError = createSelector(
  selectPhonebook,
  phonebook => phonebook.error
);

export const selectFilter = state => state.filter;
