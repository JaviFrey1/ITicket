import { GET_TICKETS } from ".";
import axios from "axios";

export default function getTickets(id) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `/tickets?idUser=${id}`
      );

      return dispatch({ type: GET_TICKETS, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
