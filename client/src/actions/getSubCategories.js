import { GET_SUBCATEGORIES } from ".";
import axios from 'axios'

export default function getSubCategories(){
    return async function(dispatch){
        try{
        const response= await axios(`/subcategories`) 
        return dispatch({ type: GET_SUBCATEGORIES, payload: response.data });
        }catch(err){console.log(err)}
    }

}