import { FILTER_CAT } from ".";
import axios from "axios";

export const filterEvent = ({order}) => { //Javi
    return (dispatch) => {
        axios.get(`http://localhost:3001/events?order=${order?order:""}`)
        .then(events => {
            return dispatch({
                type: FILTER_CAT,
                payload: events.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}