import { GET_TICKETS } from ".";
import axios from "axios";

export default function getEvents(id) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/tickets?idUser=${id}`
      );

      return dispatch({ type: GET_TICKETS, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
