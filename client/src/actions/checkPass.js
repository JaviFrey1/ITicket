import { CHECK_PASS } from '.';
import axios from 'axios';

export default function checkPass(id, pass) {
    return async function (dispatch) {
        try {
            
            const response = await axios.get(`/checkPass/${id}?password=${pass}`);
            
            dispatch({type: CHECK_PASS, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }
}