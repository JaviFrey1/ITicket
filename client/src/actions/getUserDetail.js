import { GET_USER_DETAIL } from ".";
import axios from 'axios';

export default  function getUserDetail(id){
    return async function(dispatch){
      try{
      const response = await axios(`/users/${id}`, {withCredentials: true})
      return dispatch({ type: GET_USER_DETAIL, payload: response.data })
      }catch(e){console.log(e)}
    }

}  