import { FILTER_DATE } from ".";
import axios from "axios";

export default function filterDate(startDate, endDate) {
  //   console.warn(date);
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/filter/date?startdate=${startDate}&enddate=${endDate}`
      );
      
      return dispatch({ type: FILTER_DATE, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
