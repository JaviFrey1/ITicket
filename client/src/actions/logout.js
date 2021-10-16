import { USER_LOGOUT } from ".";
import axios from "axios";

export default function logout() {
    return async function (dispatch) {
        try {
            const user = await axios.get('http://localhost:3001/loguser', { withCredentials: true });
            if (user.data.googleId) {
                const logoutGoogle = await axios.get('http://localhost:3001/logout', { withCredentials: true })
                return dispatch({ type: USER_LOGOUT, payload: logoutGoogle.data })
            } else {
                const logoutLocal = await axios.get('http://localhost:3001/out', { withCredentials: true });
                return dispatch({ type: USER_LOGOUT, payload: logoutLocal.data })
            }
        } catch (error) {
            console.log(error)
        }
    }
}