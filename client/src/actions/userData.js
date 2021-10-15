import { USER_DATA } from ".";
import axios from "axios";

export default function userData(){
    return async function (dispatch) {
        try{
            console.log('entro')
            const userData = await axios.get('http://localhost:3001/loguser', {withCredentials: true});
            console.log('userData_1 =>', userData.data)
            // if(userData.data === 'Unauthorized'){
            //     console.log('sin autorizacion en /loguser')
            //     const userData = await axios.get('http://localhost:3001/good', {withCredentials: true});
            //     console.log('userData_2 =>', userData.data)
            // }

            // console.log('userData_3 =>', userData.data)

            
            // console.log('DE ACCION Perrito ==>>> ', res.data)
            return dispatch({type: USER_DATA, payload: userData.data})

        }catch(error){
            console.log('No hay usuarios aun => Ruta /good')
        }
    }
}
