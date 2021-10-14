import { GET_RECOMMENDED } from ".";
import axios from 'axios'

export default function getRecommended(id){
    return( async function(dispatch){
        try{
            console.log('user id en accion', id)
        const response= await axios(`http://localhost:3001/recommended?userId=${id}`) 
        console.log('response del back', response.data)
        return dispatch({ type: GET_RECOMMENDED, payload: response.data });
        
        }catch(err){console.log(err)}
    
    }
    )

}