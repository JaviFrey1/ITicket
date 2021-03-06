import { GET_CATEGORIES } from ".";
import axios from 'axios'

export default function getCategories(){
    return async function(dispatch){
        try{
        const response= await axios(`/categories`) 
        return dispatch({ type: GET_CATEGORIES, payload: response.data });
        }catch(err){console.log(err)}
    }

}