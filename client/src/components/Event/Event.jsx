import React from "react";
import styles from "./Event.module.css";
import { NavLink } from "react-router-dom";

export default function Event({ name, img, fecha, cat }) {
  // const dispatch = useDispatch();
  // const wish = useSelector((state) => state.wishEvents);
  // <Link  to={`/recipes/${props.id}`}>
  // !img? img ='Not Found': img;
  return (
    <div
      className={styles.contenedor}
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className={styles.hijo}>
        <div className={styles.nombre}>{name}</div>
        <div className={styles.cat}>{cat}</div>
        <div className={styles.fecha}>{fecha}</div>
      </div>
      <div className={styles.contBtn}>
        <NavLink className={styles.link} to={`/event/:id`}>
          <div className={styles.boton}>Mas info</div>
        </NavLink>
      </div>
    </div>
  );
}
