import React from "react";
import styles from "./Event.module.css";
import { NavLink } from "react-router-dom";
import { addEventWish, removeEventWish } from "../../actions";
import * as BsIcons from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export default function Event({ event }) {
   const dispatch = useDispatch();
   const wish = useSelector((state) => state.wishEvents);
  

  return (
    <div
      className={styles.contenedor}
      style={{ backgroundImage: `url('${event.image}')` }}
    >{console.log('ESTO SERIA LA IMAGEN, URL SUPUESTAMENTE',event.image)}
      <div className={styles.hijo}>
        <div className={styles.nombre}>
          {event.name} - {event.artist}
        </div>

        <div className={styles.cat}>{event.subCategories?.map(subCat => (<span key={subCat.id}>
           {subCat.genre}
        </span>))}</div>
        <div className={styles.fecha}>{event.date}</div>
      </div>
      <div className={styles.contBtn}>
        <NavLink className={styles.link} to={`/events/:id`}>
          <div className={styles.boton}>Mas info</div>
        </NavLink>
      </div>
      <div className={`${styles.iconCont}`}>
              <div className={`${styles.icons}`}>
                {wish.includes(event) ? (
                  <BsIcons.BsBookmarkFill
                    onClick={() => dispatch(removeEventWish(event.id))}
                  ></BsIcons.BsBookmarkFill>
                ) : (
                  <BsIcons.BsBookmark
                    onClick={() => dispatch(addEventWish(event))}
                  ></BsIcons.BsBookmark>
                )}
              </div>
            </div>
    </div>
  );
}
