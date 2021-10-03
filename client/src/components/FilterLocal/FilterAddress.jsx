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
    console.log(address)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(filterAddress( address.location, address.province ));
    setAddress("");
  }



  return (
    <div className={style.contRey}>
        <form className={style.center} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.contInput}>
            <input
              className={`${style.input}`}
              name="location"
              type="text"
              id="location"
              autoComplete="off"
              placeholder="Localidad"
              onChange={(e) => handleInputChange(e)}
              value={address.location}
            />
            </div>
            <div className={style.contInput}>
                <input
              className={`${style.input}`}
              type="text"
              name="province"
              id="province"
              autoComplete="off"
              placeholder="Provincia"
              onChange={(e) => handleInputChange(e)}
              value={address.province}
            />
          </div>
          <div className={style.contBtn}>
          <button type="submit" className={style.btn}>Filtrar por ubicación</button>
          </div>
        </form>
      
    </div>
  );
}
