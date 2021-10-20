import { CONFIRM_PASSWORD } from '.';
import axios from 'axios';

export default function confirmPassword(id, newpass) {
    return async function (dispatch) {
        try {
            const response = await axios.put(`http://localhost:3001/confirm/${id}`,newpass);
            
            dispatch({type: CONFIRM_PASSWORD, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }
}