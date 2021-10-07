import { ADD_EVENT } from ".";
import axios from "axios";

export default function addEvent(body) {
  return async function (dispatch) {
    try {
      console.log('BODY ACCION', body)
      const response = await axios.post(`/event`, body);
      // console.log("RESPONSEE", response.data);
      return dispatch({ type: ADD_EVENT, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
