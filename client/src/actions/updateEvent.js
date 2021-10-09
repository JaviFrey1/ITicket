import { UPDATE_EVENTS } from ".";
import axios from "axios";

export default function updateEvent(id, body) {
    return async function (dispatch) {
        try {
            const res = await axios.put(`http://localhost:3001/event/${id}`, body)
            return dispatch({
                type: UPDATE_EVENTS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}