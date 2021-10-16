import { RESET_PASSWORD } from '.'
import axios from 'axios'

export default function resetPassword(id,email) {
    return async function (dispatch) {
        try {
            const res = await axios.put(`http://localhost:3001/password/${id}`, email, {withCredentials: true});
            console.log('LLEGUE A LA AXION',res.data)
            return dispatch({ type: RESET_PASSWORD, payload: res.data })
        } catch (error) {
            console.log(error)
        }
    }
}