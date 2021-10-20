import { ADD_EVENT } from ".";
import axios from "axios";

export default function addEvent(body) {
  return async function (dispatch) {
    try {
      
      const response = await axios.post(`/event`, body);
      
      return dispatch({ type: ADD_EVENT, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
