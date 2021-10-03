import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filterAddress from "../../actions/filterAddress";
import style from "./filterAddress.module.css";

export default function FilterAddress() {
  const dispatch = useDispatch();
  const [address, setAddress] = useState({
    location:'',
    province:''
  })

  function handleInputChange(e) {
    e.preventDefault();
    setAddress({
      ...address,
      [e.target.name]: e.target.value,

    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(filterAddress( address.location, address.province ));
    setAddress("");
  }



  return (
    <div className={style.contRey}>
      <div className={style.contSearch}>
        <form className={style.center} onSubmit={(e) => handleSubmit(e)}>
          <div >
            <input
              className={`${style.input}`}
              type="text"
              id="location"
              autoComplete="off"
              placeholder="Localidad"
              onChange={(e) => handleInputChange(e)}
              value={address.location}
            />
                <input
              className={`${style.input}`}
              type="text"
              id="province"
              autoComplete="off"
              placeholder="Provincia"
              onChange={(e) => handleInputChange(e)}
              value={address.province}
            />
          </div>
          <button type="submit" className={style.btn}>Filtrar por ubicación</button>
        </form>
      </div>
    </div>
  );
}
