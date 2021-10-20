import React, { useState } from "react";
import styles from "./Event.module.css";
import { NavLink } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import { saveState, removeState, loadState } from "../../localStorage";
import Swal from "sweetalert2";

export default function Event({ event }) {
  var favorites = loadState();
  const [favs, setFavs] = useState("");

  return (
    <div
      className={styles.contenedor}
      style={{ backgroundImage: `url('${event.image}')` }}
    >
      <div>
        <div className={`${styles.icons}`}>
          {favorites.includes(JSON.stringify(event)) ? (
            <BsIcons.BsBookmarkFill
              onClick={() => {
                removeState(event);
                favorites = loadState();
                setFavs("eliminado de favs");
                Swal.fire({
                  position: "center",
                  imageUrl: "https://i.gifer.com/7efs.gif",
                  title: "Eliminado de lista de deseos",
                  showConfirmButton: false,
                  timer: 1500,
                });
                console.log(favs);
              }}
            />
          ) : (
            <BsIcons.BsBookmark
              style={{ color: "#efb810" }}
              onClick={() => {
                saveState(event);
                favorites = loadState();
                setFavs("agregado a favs");
                console.log(favs);
              }}
            />
          )}
        </div>
      </div>
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
