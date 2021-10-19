import { UPDATE_AVAILABLE } from ".";
import axios from "axios";

export default function updateAvailable(id, cantidad) {
    return async function (dispatch) {
        try {
            const res = await axios.put(`/event?eventId=${id}&cantidad=${cantidad}`)

            return dispatch({
                type: UPDATE_AVAILABLE,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
