import { BULK_EVENTS } from ".";
import axios from "axios";

export default function bulkEvents(body) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/bulkevents`, body);
      return dispatch({ type: BULK_EVENTS, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
