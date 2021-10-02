
   
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getEvents from "../../actions/getEvents";
import style from "./search.module.css";



export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
    // dispatch(getEvents({title}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getEvents({title}));
    setTitle("");
  }
  
 
  return (
    <div className={style.contRey} >

    <div className={style.contSearch}>
      <form className={style.formContainer} onSubmit={(e) => handleSubmit(e)}>
        <div className={style.searchBarContainer}>
        <input
          className={`${style.input}`}
          type="text"
          id="title"
          autoComplete="off"
          placeholder="Busca un evento o artista"
          onChange={(e) => handleInputChange(e)}
          value={title}
        />
        </div>
        <button className={`${style.btn}`} onClick={(e)=>getEvents('')}>Ver todos</button>

      </form>
    </div>
    </div>
  );
}
