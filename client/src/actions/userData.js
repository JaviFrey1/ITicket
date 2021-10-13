import { USER_DATA } from ".";
import axios from "axios";

export default function userData(){
    return async function (dispatch) {
        try{
            const res = await axios.get('http://localhost:3001/good', {withCredentials: true});
            // console.log('DE ACCION Perrito ==>>> ', res.data)
            return dispatch({type: USER_DATA, payload: res.data})

        }catch(error){
            console.log('No hay usuarios aun => Ruta /good')
        }
    }
}
