import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filterAddress from "../../actions/filterAddress";
import style from "./filterAddress.module.css";

export default function FilterAddress() {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setAddress(e.target.value);
    // dispatch(getEvents({title}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    const array = address.split(",");
    const localidad = array[0];
    const provincia = array[1];
    dispatch(filterAddress({ localidad, provincia }));
    setAddress("");
  }



  return (
    <div className={style.contRey}>
      <div className={style.contSearch}>
        <form className={style.formContainer} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.searchBarContainer}>
            <input
              className={`${style.input}`}
              type="text"
              id="address"
              autoComplete="off"
              placeholder="localidad, Provincia"
              onChange={(e) => handleInputChange(e)}
              value={address}
            />
          </div>
          <button type="submit">FILTRAR</button>
        </form>
      </div>
    </div>
  );
}
