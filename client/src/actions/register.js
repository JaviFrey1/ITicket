import { USER_REGISTER } from ".";
import axios from "axios";

export default function userRegister(body){
    return async function (dispatch) {
        try{
            const res = await axios.post('http://localhost:3001/register', body); //jajn't
            // console.log('DE ACCION Perrito ==>>> ', res.data)
            return dispatch({type: USER_REGISTER, payload: res.data})

        }catch(error){
            console.log(error)
        }
    }
}