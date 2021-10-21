import { CONFIRM_FORGOT } from '.';
import axios from 'axios';

export default function confirmForgot(id, newpass) {
    return async function (dispatch) {
        try {
            const response = await axios.put(`http://localhost:3001/users/${id}`, newpass);
            
            dispatch({type: CONFIRM_FORGOT, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }
}