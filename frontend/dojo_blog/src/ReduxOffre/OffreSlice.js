import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const url = process.env.BASE_URL

const initialState = {
    items : [],
    status: null,
    Error:null
}

export const OffreThunk = createAsyncThunk(
    "offre/offreThunk",
    async()=>{
        try {
            const reponse = await axios.get(`${url}`)
            console.log(reponse?.data);
            return reponse?.data
        } catch (error) {
            console.log(error);
        }
    }
)

const OffreSlice = createSlice({
    name:"offre",
    initialState,
    reducers:{},
    extraReducers:{
        [OffreThunk.pending]:(state,action)=>{
         state.status = "pending"
        },
        [OffreThunk.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },
        [OffreThunk.rejected]:(state,action)=>{
           state.status = "rejected"
           state.Error = action.payload
        }
    },
})

export default OffreSlice.reducer;