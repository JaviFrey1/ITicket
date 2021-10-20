import { DELETE_USER } from ".";
import axios from "axios";

export default function deleteUser(id) {
    return async function (dispatch) {
        try {
            const res = await axios.delete(`/users/${id}`)
            return dispatch({
                type: DELETE_USER,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}