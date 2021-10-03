import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import es from "date-fns/locale/es";
import filterDate from "../../actions/filterDate";
import s from "./filterDate.module.css";

registerLocale("es", es);
export default function FilterDate() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  function handleChange(date) {
    setDate(date);
  }

  function selectDate(date) {
    dispatch(filterDate(date.toLocaleDateString()));
  }

  return (
    <>
      <div className={`${s.contenedor}`}>
        <div className={`${s.center}`}>
          <DatePicker
            className={`${s.datePicker}`}
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={handleChange}
            locale="es"
          />

          <input
            className={`${s.btn}`}
            type="button"
            value="Filtrar por fecha"
            onClick={() => selectDate(date)}
          />
        </div>
      </div>
    </>
  );
}
