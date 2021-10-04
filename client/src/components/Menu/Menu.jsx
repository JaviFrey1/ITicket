import React, { useEffect, useState } from "react";
import style from "./menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import getCategories from "../../actions/getCategories";
import getSubCategories from "../../actions/getSubCategories";
// import filterCat from "../../actions/filterCat";
import filterSubCat from "../../actions/filterSubCat";

export default function Menu() {
  const [subCatOpt, setSubCatOpt] = useState([""]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categories = useSelector((state) => state.categories);
  const subcategories = useSelector((state) => state.subCategories);
  function handleClickCat(id) {
    const subCatOpt = subcategories.filter(
      (subCat) => subCat.categoryId === id
    );
    setSubCatOpt(subCatOpt);
    // dispatch(filterCat(id));
  }

  function handleClickSubCat(genre) {
    dispatch(filterSubCat(genre));
  }

  return (
    <div className={style.contRey}>
      <div className={style.contMenu}>
        <div className={style.categoriesOptions}>
          {categories &&
            categories.map((cat, i) => (
              <h3 key={i} onClick={() => handleClickCat(cat.id)}>
                {cat.name}
              </h3>
            ))}
        </div>
        <div className={style.contSubcategories}>
          {subCatOpt.map((subCat, i) => {
            return (
              <div key={i} className={style.contTitle}>
                <h4 onClick={() => handleClickSubCat(subCat.genre)}>
                  {subCat.genre}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
