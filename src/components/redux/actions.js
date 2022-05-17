import axios from "axios"
import { actionTypes } from "./actiontypes"



export const addData = () => {
    return async (dispatch)=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        dispatch({type: actionTypes.add_Data,
        payload: response.data
        })
    }

    // return {
    //     type: actionTypes.add_Data,
    //     payload: response
    // }
}