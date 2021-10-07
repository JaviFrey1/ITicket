import { FILTER_CAT } from ".";
import axios from "axios";


export default function filterCat(id){
    return( async function(dispatch){
        try{
        const response = await axios.get(`/filter/cat?id=${id}`)        
        return dispatch({ type: FILTER_CAT, payload: response.data });
        
        }catch(err){console.log(err)}
    
    }
    )

}