import { RESET_PASSWORD } from '.'
import axios from 'axios'

export default function resetPassword(id,email) {
    return async function (dispatch) {
        try {
            console.log('ANTES DEL PUT',id,email)
            let res = await axios.put(`http://localhost:3001/password/${id}`);
            console.log(res)
            console.log('DESPUES', res.data);
            return dispatch({ type: RESET_PASSWORD, payload: res.data })
        } catch (error) {
            console.log(error)
        }
    }
}