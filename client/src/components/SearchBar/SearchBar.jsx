import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getEvents from "../../actions/getEvents";
import s from "./search.module.css";
// import * as ImIcons from "react-icons/im";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
    // dispatch(getRecipes(title))
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getEvents(title));
    setTitle("");
  }

  return (
    <div className={`${s.wrap}`}>
      <form className={`${s.form}`} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={`${s.search}`}
          type="text"
          id="title"
          autoComplete="off"
          placeholder="search"
          onChange={(e) => handleInputChange(e)}
          value={title}
        />

        {/* <ImIcons.ImSearch className={`${s.search_submit}`} type="submit" /> */}
      </form>
    </div>
  );
}
