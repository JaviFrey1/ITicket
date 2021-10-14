import { PAYPAL } from ".";
import axios from "axios";

export default function paypal(body) {
    console.log('body=>>> ',body);
    return async function (dispatch) {
        try {
    
            const response = await axios.post(`http://localhost:3001/paypal`, body);
            console.log('en accion ==> ', response.data)
            window.location.replace(response.data);
            return dispatch({ type: PAYPAL, payload: response.data });
            
        } catch (err) {
            console.log(err);
        }
    };
}