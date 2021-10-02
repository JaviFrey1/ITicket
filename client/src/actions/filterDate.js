import { FILTER_DATE } from ".";
import axios from "axios";


export default function filterDate(date){
    return( async function(dispatch){
        try{
        const response = await axios.get(`http://localhost:3001/filter/date?date=${date}`)        
        return dispatch({ type: FILTER_DATE, payload: response.data });
        
        }catch(err){console.log(err)}
    
    }
    )

}