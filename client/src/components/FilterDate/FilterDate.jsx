import React, {Component, useState} from "react";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from "react-redux";
import es from 'date-fns/locale/es'
import filterDate from '../../actions/filterDate'

registerLocale('es', es)
export default function FilterDate(){

 const dispatch = useDispatch()




const [date, setDate] = useState(new Date())





function handleChange(date){
 setDate(date);
}

function selectDate(date) {
  alert(date.toLocaleDateString())
  dispatch(filterDate(date.toLocaleDateString()));
}

  
    return (
      <>
        <div className="contenedor">
          <div className="center">
           <DatePicker selected={date} onChange={handleChange} locale='es'/>
           <br /><br />

           <input type="button" value="Filtrar por fecha"  onClick={()=>selectDate(date)}/>
          </div>
        </div>
      </>
    );
  
}
// class FilterDate extends Component {
//   state={
//     fecha: new Date()
//   }
  
//   onChange=fecha=>{
//     this.setState({fecha: fecha});
//   }
  
//   mostrarFecha = fecha=>{
//     alert(fecha.toLocaleDateString());
//   }
  
//     render() {
//       return (
//         <>
//           <div className="contenedor">
//             <div className="center">
//              <DatePicker selected={this.state.fecha} onChange={this.onChange} locale='es' />
//              <br /><br />
  
//              <input type="button" value="Mostrar Fecha"  onClick={()=>this.mostrarFecha(this.state.fecha)}/>
//             </div>
//           </div>
//         </>
//       );
//     }
//   }

//   export default FilterDate
