import { TIME_VS_TICKETS } from ".";
import axios from 'axios';

export default  function getBest(artist){
    return async function(dispatch){
      try{
      const response = await axios(`http://localhost:3001/stats/time?artist=${artist}`)

      return dispatch({ type: TIME_VS_TICKETS, payload: response.data })
      }catch(e){console.log(e)}
    }

}  