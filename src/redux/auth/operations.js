import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit"
import { userLogin, userRegister } from 'services/api';
axios.defaults.baseURL = 'https://653927fee3b530c8d9e80563.mockapi.io'

export const loginThunk = createAsyncThunk(
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
export const registerThunk = createAsyncThunk(
    "auth/register", async(formData, thunkAPI) => {
        try{
            const response = await userRegister(formData)
            console.log(response);
            return response
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)