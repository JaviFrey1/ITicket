import { CONFIRM_FORGOT } from '.';
import axios from 'axios';

export default function confirmForgot(id, newpass) {
    return async function (dispatch) {
        try {
            const response = await axios.put(`/confirmForgot/${id}`, newpass);
            console.log('Confirm =>', response.data);
            dispatch({type: CONFIRM_FORGOT, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }
}