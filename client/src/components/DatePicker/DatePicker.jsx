import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import es from "date-fns/locale/es";
import filterDate from "../../actions/filterDate";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default Datepicker;
