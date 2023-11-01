import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit"
import { userLogin, userRegister } from 'services/api';
axios.defaults.baseURL = 'https://653927fee3b530c8d9e80563.mockapi.io'

export const login = createAsyncThunk(
    "auth/login", async(formData, thunkAPI) => {
        try{
            const response = await userLogin(formData)
            return response
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const register = createAsyncThunk(
    "auth/register", async(formData, thunkAPI) => {
        try{
            const response = await userRegister(formData)
            return response
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async(contactId, thunkAPI) => {
        try{
            const response = await axios.delete(`/contacts/${contactId}`)
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)