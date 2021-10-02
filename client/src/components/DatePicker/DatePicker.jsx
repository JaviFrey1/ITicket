import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from "react-redux";
import es from 'date-fns/locale/es'
import filterDate from '../../actions/filterDate'

registerLocale('es', es)
export default function DatePicker(){

 const dispatch = useDispatch()

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //enero es 0!
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
      dd = '0' + dd;
    }
    
    if (mm < 10) {
      mm = '0' + mm;
    }
    
    fecha = yyyy + '/' + mm + '/' + dd;
    const [date, setDate] = useState(fecha)


function handleChange(){
 setDate({date});
}

function selectDate(date) {
  dispatch(filterDate(date));
}

  
    return (
      <>
        <div className="contenedor">
          <div className="center">
           <DatePicker selected={date} onChange={()=>handleChange()} locale='es'/>
           <br /><br />

           <input type="button" value="Filtrar por fecha" className="btn btn-primary" onClick={()=>selectDate(date)}/>
          </div>
        </div>
      </>
    );
  
}

export default App;