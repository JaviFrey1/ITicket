import { GET_RECOMMENDED } from ".";
import axios from 'axios'

export default function getRecommended(id){
    return( async function(dispatch){
        try{
 
        const response= await axios(`http://localhost:3001/recommended?userId=${id}`) 
        
        return dispatch({ type: GET_RECOMMENDED, payload: response.data });
        
        }catch(err){console.log(err)}
    
    }
    )

}