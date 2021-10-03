import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getEvents from "../../actions/getEvents";
import style from "./search.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../Menu/Menu";
import NavBar from "./NavBar";
import { setPage } from "../../actions";
// => esto en el handleSubmit

export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [menuActivo, setMenuActivo] = useState(false);

  function handleInputChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
    // dispatch(getEvents({title}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getEvents({ title }));
    dispatch(setPage(1));
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
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}
