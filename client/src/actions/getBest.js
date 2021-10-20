import { GET_BEST } from ".";
import axios from 'axios';

export default  function getBest(id){
    return async function(dispatch){
      try{
      const response = await axios(`/stats`)
      return dispatch({ type: GET_BEST, payload: response.data })
      }catch(e){console.log(e)}
    }

}  