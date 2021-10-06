import { ADD_EVENT } from ".";
import axios from "axios";

export default function addEvent(body) {
  return async function (dispatch) {
    try {
      console.log('BODY ACCION', body)
      const response = await axios.post(`http://localhost:3001/event`, body);
      console.log("RESPONSEE", response.data);
      return dispatch({ type: ADD_EVENT, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
