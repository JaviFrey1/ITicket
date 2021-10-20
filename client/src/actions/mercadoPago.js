import { MERCADO_PAGO } from ".";
import axios from "axios";

export default function mercadoPago(body) {
  return async function (dispatch) {
    try {
      
      const response = await axios.post(`/checkout`, body);

      window.location.replace(response.data);
      
      return dispatch({ type: MERCADO_PAGO, payload: response.data });

    } catch (err) {
      console.log(err);
    }
  };
}