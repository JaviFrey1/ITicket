import { GET_EVENT_DETAIL } from ".";
import axios from 'axios';

export default  function getEventDetail(id){
    return async function(dispatch){
      try{
      const response = await axios(`/events/${id}`)
      return dispatch({ type: GET_EVENT_DETAIL, payload: response.data })
      }catch(e){console.log(e)}
    }

}  