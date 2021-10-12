import { POST_TICKETS } from ".";
import axios from "axios";

export default function postTickets (body) {
    return async function (dispatch) {
        try{
            console.log('soy body previo a axios',body)
            const res = await axios.post('http://localhost:3001/tickets', body);
            console.log('soy data?', res.data)
            return dispatch({type: POST_TICKETS, payload: res.data})
        } catch (error) {
            console.log(error)
        }
    }
}