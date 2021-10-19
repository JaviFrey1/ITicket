import { FILTER_SUBCAT } from ".";
import axios from "axios";


export default function filterSubCat(genre){
    return( async function(dispatch){
        try{
        const response = await axios.get(`/filter/sub?genre=${genre}`)        
        return dispatch({ type: FILTER_SUBCAT, payload: response.data });
        
        }catch(err){console.log(err)}
    
    }
    )

}