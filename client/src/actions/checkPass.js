import { CHECK_PASS } from '.';
import axios from 'axios';

export default function checkPass(id, pass) {
    return async function (dispatch) {
        try {
            console.log('id del user en accion', id, 'pass a verificar', pass)
            const response = await axios.get(`http://localhost:3001/checkPass/${id}?password=${pass}`);
            console.log('response en accion', response.data)
            dispatch({type: CHECK_PASS, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }
}