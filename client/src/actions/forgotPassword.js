import { FORGOT_PASSWORD } from ".";
import axios from "axios";

export default function forgotPassword(email) {
    return async function (dispatch) {
        try {
           
            const response = await axios.put(`http://localhost:3001/forgot`, email);
            return dispatch({type: FORGOT_PASSWORD, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }
}