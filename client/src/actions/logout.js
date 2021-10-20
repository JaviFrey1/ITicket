import { USER_LOGOUT } from ".";
import axios from "axios";

export default function logout() {
    return async function (dispatch) {
        try {
            const user = await axios.get('/loguser', { withCredentials: true });
            if (user.data.googleId) {
                const logoutGoogle = await axios.get('/logout', { withCredentials: true })
                return dispatch({ type: USER_LOGOUT, payload: logoutGoogle.data })
            } else {
                const logoutLocal = await axios.get('/out', { withCredentials: true });
                return dispatch({ type: USER_LOGOUT, payload: logoutLocal.data })
            }
        } catch (error) {
            console.log(error)
        }
    }
}