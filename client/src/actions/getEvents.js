import { GET_EVENTS } from ".";
import axios from 'axios'

export default function getEvents({title, page}){
    return( async function(dispatch){
        try{
        const response= await axios(`http://localhost:3001/events?name=${title}&page=${page?page:1}`) 
        
        return dispatch({ type: GET_EVENTS, payload: response.data });
        
        }catch(err){console.log(err)}
    
    }
    )

}