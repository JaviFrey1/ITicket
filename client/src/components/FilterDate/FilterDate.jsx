import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import es from "date-fns/locale/es";
import filterDate from "../../actions/filterDate";
import s from "./FilterDate.module.css";

registerLocale("es", es);
export default function FilterDate() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);


  function selectDate(startDate, endDate) {
    dispatch(filterDate(startDate, endDate));
  }

  return (
    
    <>
      <div className={`${s.contenedor}`}>
        <div className={`${s.center}`}>
   
        <div className={s.contInput}>
          <DatePicker
            className={`${s.datePicker}`}
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            locale="es"
          />
           <DatePicker
            className={`${s.datePicker}`}
            dateFormat="yyyy/MM/dd"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        locale="es"

      />

          <input
            className={`${s.btn}`}
            type="button"
            value="Filtrar por fecha"
            onClick={() => selectDate(startDate,endDate)}
          />
        </div>
        </div>
      </div>
    </>
  );
}
