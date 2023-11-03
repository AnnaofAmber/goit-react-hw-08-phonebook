import { createAsyncThunk } from "@reduxjs/toolkit"
import { requestAddContact, requestDeleteContact, requestFetchContacts } from 'services/api';

// export const fetchContacts = createAsyncThunk(
//     "contacts/fetchAll", async(_, thunkAPI) => {
//         try{
//             const contacts = await requestFetchContacts() 
//             return contacts
//         }
//         catch(error){
//             return thunkAPI.rejectWithValue(error.message)
//         }
//     }
// )
// export const addContact = createAsyncThunk(
//     "contacts/addContact", async(newContact, thunkAPI) => {
//         try{
//             const contact = await requestAddContact(newContact)
//             return contact
//         }
//         catch(error){
//             return thunkAPI.rejectWithValue(error.message)
//         }
//     }
// )
// export const deleteContact = createAsyncThunk(
//     "contacts/deleteContact", async(contactId, thunkAPI) => {
//         try{
//             const deletedContact = await requestDeleteContact(contactId)
//             return deletedContact
//         }
//         catch(error){
//             return thunkAPI.rejectWithValue(error.message)
//         }
//     }
// )
export const fetchContacts = createAsyncThunk(
    'contacts/getAll',
    async (_, thunkAPI) => {
      try {
        const contacts = await requestFetchContacts();
  
        return contacts; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/add',
    async (newContact, thunkAPI) => {
      try {
        const contact = await requestAddContact(newContact);
        console.log('contact: ', contact);
  
        return contact; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/delete',
    async (contactId, thunkAPI) => {
      try {
        const deletedContact = await requestDeleteContact(contactId);
  
        return deletedContact; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  