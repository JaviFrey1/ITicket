import { MERCADO_PAGO } from ".";
import axios from "axios";

export default function addEvent(body) {
  return async function (dispatch) {
    try {
      
      const response = await axios.post(`http://localhost:3001/checkout`, body);
      
      return dispatch({ type: ADD_EVENT, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}