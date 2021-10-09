<<<<<<< HEAD
import React, { useState } from "react";
import style from "./search.module.css";
// import * as ImIcons from "react-icons/im";
function SearchBar({ input, setInput }) {
  const subCt_1 = ["Rock", "Pop", "Heavy Metal", "Tango"];
  const subCt_2 = ["Alternativo", "Drama", "Stand up"];
  const subCt_3 = ["Deportes", "Festival", "TED"];
  const subCt_4 = [""];
=======
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getEvents from "../../actions/getEvents";
import style from "./search.module.css";

import NavBar from "./NavBar";
// import { setPage } from "../../actions";
// => esto en el handleSubmit

export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setTitle(e.target.value);

    // dispatch(getEvents(title))
  }
>>>>>>> 2896fe95e9656eed7e9e908d034814581cfa253e

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getEvents( title ));
    // dispatch(setPage(1));
    setTitle("");
  }

  return (
    <div className={style.contRey}>
      <div className={style.contSearch}>
        <div className={style.menu_btn}>
          <NavBar />
        </div>

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
          <button className={`${style.btn}`} onClick={(e) => getEvents("")}>
           VER TODOS
          </button>
        </form>
      </div>
    </div>
  );
}
