import { USER_REGISTER } from "./index";
import axios from "axios";

export default function userRegister(body){
    return async function (dispatch) {
        try{
            const res = await axios.post('/register', body); 
            return dispatch({type: USER_REGISTER, payload: res.data})

        }catch(error){
            console.log(error)
        }
    }
}