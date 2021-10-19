import { PAYPAL } from ".";
import axios from "axios";

export default function paypal(body) {
    console.log('body=>>> ',body);
    return async function (dispatch) {
        try {
    
            const response = await axios.post(`/paypal`, body);
            
            window.location.replace(response.data);
            return dispatch({ type: PAYPAL, payload: response.data });
            
        } catch (err) {
            console.log(err);
        }
    };
}