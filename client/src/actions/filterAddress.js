import { FILTER_ADDRESS } from ".";
import axios from "axios";


export default function filterAddress(address){


    return( async function(dispatch){
        try{
        const response = await axios.get(`http://localhost:3001/filter/address?localidad=${address.location}&&provincia=${address.province}`)        
        return dispatch({ type: FILTER_ADDRESS, payload: response.data });
        
        }catch(err){console.log(err)}
    
    }
    )

}