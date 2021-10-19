import { RESET_PASSWORD } from '.'
import axios from 'axios'

export default function resetPassword(id,email) {
    return async function (dispatch) {
        try {
            
            let res = await axios.put(`/password/${id}`);
            
            return dispatch({ type: RESET_PASSWORD, payload: res.data })
        } catch (error) {
            console.log(error)
        }
    }
}