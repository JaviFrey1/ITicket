import { FILTER_DATE } from ".";
import axios from "axios";

export default function filterDate(date) {
  //   console.warn(date);
  return async function (dispatch) {
    try {
      const response = await axios.get( `/filter/date?date=${date}` );
      console.warn("ACCION=> ", response.data);
      return dispatch({ type: FILTER_DATE, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
