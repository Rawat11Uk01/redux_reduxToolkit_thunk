import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchData = createAsyncThunk('jsonData/fetchData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
   
    return data;
})

const initialState = {
    item: [],
}
const dataSlice = createSlice({
    name: 'JsonData',
    initialState:initialState,
    reducers: {
        addTitle(state, action) {
            state.title = action.payload;
        }
    },
    extraReducers: {
        [fetchData.pending]: () => { console.log('pending') },
        [fetchData.fulfilled]:(state, {payload}) => {
            console.log('fullfilled');
            state.item = payload;
        },
        [fetchData.rejected]: (state, action) => {
            console.log('rejected');
            return { ...state, item: action.payload }
        }
    }
}

)


export const dataActions = dataSlice.actions;
export default dataSlice.reducer;