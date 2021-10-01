import React, { useState } from "react";

import style from "./search.module.css";
// import * as ImIcons from "react-icons/im";

function SearchBar({ input, setInput }) {
  const subCt_1 = ["Rock", "Pop", "Heavy Metal", "Tango"];
  const subCt_2 = ["Alternativo", "Drama", "Stand up"];
  const subCt_3 = ["Deportes", "Festival", "TED"];
  const subCt_4 = [""];

  const [subCatOpt, setSubCatOpt] = useState(subCt_4);

  return (
    <div className={style.contRey}>
      <div className={style.contSearch}>
        <div className={style.categoriesOptions}>
          <h3
            onClick={() => {
              setSubCatOpt(subCt_1);
            }}
          >
            Musica
          </h3>
          <h3
            onClick={() => {
              setSubCatOpt(subCt_2);
            }}
          >
            Teatro
          </h3>
          <h3
            onClick={() => {
              setSubCatOpt(subCt_3);
            }}
          >
            Otros
          </h3>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={style.formContainer}
        >
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
        {/*<div className={style.contCategorias}></div>*/}
      </div>
      <div className={style.contSubcategies}>
        {subCatOpt.map((i) => {
          return <h4>{i}</h4>;
        })}
      </div>
    </div>
  );
}

export default SearchBar;
