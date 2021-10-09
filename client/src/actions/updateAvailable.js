import { UPDATE_AVAILABLE } from ".";
import axios from "axios";

export default function updateAvailable(id, body) {
    return async function (dispatch) {
        try {
            const res = await axios.put(`http://localhost:3001/event?idUser=${id}`, body)
            return dispatch({
                type: UPDATE_AVAILABLE,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
