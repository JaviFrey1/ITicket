import React from "react";
import style from "./search.module.css";
// import * as ImIcons from "react-icons/im";

function SearchBar({ input, setInput }) {
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={style.formContainer}
      >
        <div className={style.search}>
        </div>
        <div className={style.searchBarContainer}>
          <input
            type="text"
            value={input}
            placeholder="Busca un evento"
            //onChange={(e) => setInput(e.target.value)}
            className={style.input}
          ></input>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
