import { USER_DATA } from ".";
import axios from "axios";

export default function userData(){
    return async function (dispatch) {
        try{
            const res = await axios.get('http://localhost:3001/good');
            return dispatch({type: USER_DATA, payload: res.data.user.id})

        }catch(error){
            console.log(error)
        }
    }
}
