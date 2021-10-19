import { DELETE_EVENT } from ".";
import axios from "axios";

export default function deleteEvent(id) {
    return async function (dispatch) {
        try {
            const res = await axios.delete(`/event/${id}`)
            return dispatch({
                type: DELETE_EVENT,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}