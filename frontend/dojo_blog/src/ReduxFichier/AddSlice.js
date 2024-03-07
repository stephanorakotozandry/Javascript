import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    offreItems : []
}

const AddFichier = createSlice({
    name:"add",
    initialState,
    reducers:{
        addToFichier(state,action){
            const items = {...action.payload}
            state.offreItems.push(items)
        }
    }
})

export const { addToFichier } = AddFichier.actions
export default AddFichier.reducer;