import { UPDATE_USER_PASS } from ".";
import axios from "axios";

export default function updateUserPass(id, newPass) {
    return async function (dispatch) {
        try {
            const res = await axios.put(`http://localhost:3001/users/${id}`, newPass)
            return dispatch({
                type: UPDATE_USER_PASS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}