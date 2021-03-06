import { POST_TICKETS } from ".";
import axios from "axios";

export default function postTickets (body) {
    return async function (dispatch) {
        try{

            const res = await axios.post('/tickets', body);
            return dispatch({type: POST_TICKETS, payload: res.data})
        } catch (error) {
            console.log(error)
        }
    }
}