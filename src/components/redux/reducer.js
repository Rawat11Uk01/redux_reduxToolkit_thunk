import { actionTypes } from "./actiontypes";


const initialState = {
    item: []
}


export const ProductReducer = (state={initialState}, action) => {
    switch (action.type) {
        case actionTypes.add_Data:
            return { ...state, item: action.payload }
        default:
            return state;
    }

}