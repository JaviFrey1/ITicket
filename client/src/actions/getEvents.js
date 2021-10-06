import { GET_EVENTS } from ".";
import axios from 'axios'

export default function getEvents(title){
    return( async function(dispatch){
        try{
        const response= await axios(`http://localhost:3001/events?name=${title}`) 
        
        return dispatch({ type: GET_EVENTS, payload: response.data });
        
        }catch(err){console.log(err)}
    
    }
    )

}