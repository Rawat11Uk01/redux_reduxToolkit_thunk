import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './dataSlice'


const store = configureStore({
    reducer: {
        title: dataReducer,
    }
});


export default store;