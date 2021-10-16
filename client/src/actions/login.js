import { USER_LOGIN } from "./index";
import axios from "axios";

export default function userLogin(body) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/login`, body, { withCredentials: true });
      const userData = await axios.get(`http://localhost:3001/loguser`,{ withCredentials: true });
      
      if (userData.data.googleId) {
        return dispatch({ type: USER_LOGIN, payload: response.data });
      }
      else {
        window.location.replace(response.data);
        return dispatch({ type: USER_LOGIN, payload: response.data });
      }
    } catch (err) {
      console.log('FALLO EL LOGUEO LOCAL',err);
    }
  };
}