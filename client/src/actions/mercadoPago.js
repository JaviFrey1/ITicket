import { MERCADO_PAGO } from ".";
import axios from "axios";

export default function mercadoPago(body) {
  return async function (dispatch) {
    try {
      
      const response = await axios.post(`http://localhost:3001/checkout`, body);
      console.log(response.data)
      window.location.replace(response.data)
      return dispatch({ type: MERCADO_PAGO, payload: response.data });

    } catch (err) {
      console.log(err);
    }
  };
}