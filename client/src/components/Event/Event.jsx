import React from "react";
import styles from "./Event.module.css";
import { NavLink } from "react-router-dom";
// import { addEventWish, removeEventWish } from "../../actions";
import * as BsIcons from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
import {  saveState, removeState, loadState } from "../../localStorage";

export default function Event({ event }) {
  // const dispatch = useDispatch();
  // const wish = useSelector((state) => state.wishEvents);
  const favorites = loadState();
  

  return (
    <div
      className={styles.contenedor}
      style={{ backgroundImage: `url('${event.image}')` }}
    >
      <div className={styles.contData}>
        <div className={styles.hijo}>
          <div className={styles.nombre}>
            <p>
              {event.name} - {event.artist}
            </p>
          </div>
          <div className={styles.fecha}>{event.date}</div>
          <div className={styles.fecha}>{event.place}</div>
          <div></div>
          <div className={`${styles.icons}`}>
            {favorites.includes(JSON.stringify(event)) ? (
              <BsIcons.BsBookmarkFill
                onClick={() => {
                  // dispatch(removeEventWish(event.id))
                  removeState(event);
                }
                } />
            ) : (
              <BsIcons.BsBookmark
                onClick={() => {
                  // dispatch(addEventWish(event));
                  saveState(event);
                }} />
            )}
          </div>
        </div>
        <div className={styles.contBtn}>
          <NavLink className={styles.link} to={`/events/${event.id}`}>
            <div className={styles.boton}>Mas info</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
