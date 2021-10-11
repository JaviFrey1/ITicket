import { USER_LOGOUT_GOOGLE } from ".";
import axios from "axios";

export default function userData(){
    return async function (dispatch) {
        try{
            const res = await axios.get('http://localhost:3001/google/logout', {withCredentials: true});
            // console.log('DE ACCION Perrito ==>>> ', res.data)
            return dispatch({type: USER_LOGOUT_GOOGLE, payload: res.data})

        }catch(error){
            console.log(error)
        }
    }
}