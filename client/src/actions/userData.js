import { USER_DATA } from ".";
import axios from "axios";

export default function userData() {
    return async function (dispatch) {
        try {
            const userData = await axios.get('/loguser', { withCredentials: true });
            return dispatch({ type: USER_DATA, payload: userData.data })

        } catch (error) {
            console.log('No hay un usuario logueado', error)
        }
    }
}