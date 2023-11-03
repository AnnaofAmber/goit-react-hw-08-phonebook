// export const selectContacts = state=> state.contacts
// export const selectFilter = state=> state.filter
// export const selectIsLoading = state=> state.isLoading
// export const selectError= state=> state.error

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
export const selectContactsFilterTerm = createSelector(
  selectPhonebook,
  phonebook => phonebook.filterTerm
);