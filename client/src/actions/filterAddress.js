import { FILTER_ADDRESS } from ".";
import axios from "axios";


export default function filterAddress({localidad, provincia}){
    return( async function(dispatch){
        try{
        const response = await axios.get(`http://localhost:3001/filter/address?localidad=${localidad}&&provincia=${provincia}`)        
        return dispatch({ type: FILTER_ADDRESS, payload: response.data });
        
        }catch(err){console.log(err)}
    
    }
    )

}