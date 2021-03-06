import { UPDATE_TICKET } from ".";
import axios from "axios";

export default function updateTicket(id, propietario) {
  return async function (dispatch) {
    try {
      const res = await axios.put(
        `/tickets/${id}?propietario=${propietario}`
      );
      return dispatch({
        type: UPDATE_TICKET,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
