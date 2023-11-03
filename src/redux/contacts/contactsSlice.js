import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// const initialState = {
//     contacts: null,
//     isLoading: false,
//     error: null
  
// };
const INITIAL_STATE = {
  contacts: null,
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Array.isArray(state.contacts)) {
          state.contacts.unshift(action.payload);
        } else {
          state.contacts = [action.payload];
        }
        // state.products = [action.payload, ...state.products];
        // state.products.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { setFilterTerm } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   extraReducers: builder =>
//    {
//     builder
//     .addCase(fetchContacts.pending, handlePending)
//     .addCase(fetchContacts.fulfilled, (state, action)=> {
//       state.isLoading = false;
//       state.contacts = action.payload;
//     })
//     .addCase(fetchContacts.rejected, handleRejected)


//     .addCase(addContact.pending, handlePending)
//     .addCase(addContact.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       if(Array.isArray(state.contacts)){
//         state.contacts.push(action.payload);
//       }
//       else {
//         state.contacts = [action.payload];
//       }
//     })
//     .addCase(addContact.rejected, handleRejected)


//     .addCase(deleteContact.pending, handlePending)
//     .addCase(deleteContact.fulfilled, (state, action) =>{
//       state.isLoading = false;
//       state.error = null;
//       const index = state.contacts.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.contacts.splice(index, 1);
//     })
//     .addCase(deleteContact.rejected, handleRejected)
//   },
// });
  
// export const contactsReducer = contactsSlice.reducer;
