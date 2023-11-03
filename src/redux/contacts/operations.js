import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit"
import { requestAddContact, requestDeleteContact, requestFetchContacts } from 'services/api';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", async(_, thunkAPI) => {
        try{
            const response = await requestFetchContacts() 
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const addContact = createAsyncThunk(
    "contacts/addContact", async(newContact, thunkAPI) => {
        try{
            const response = await requestAddContact(newContact)
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async(contactId, thunkAPI) => {
        try{
            const response = await requestDeleteContact(contactId)
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)