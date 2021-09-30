import React from "react";
import styles from "./Event.module.css";
import { NavLink } from "react-router-dom";

export default function Event({ name, date, artist, image, subCategories }) {
  // const dispatch = useDispatch();
  // const wish = useSelector((state) => state.wishEvents);
  // <Link  to={`/recipes/${props.id}`}>
  // !img? img ='Not Found': img;

  // const [state, setState] = useState({
  //   name: "",
  //   date: "",
  //   artist: "",
  //   time: "",
  //   place: "",
  //   image: "",
  //   price:'',
  //   availableTickets: "",
  //   subCategories: [], //LLEGA ARRAY DE STRINGS(GENRE DE SUBCAT)
  //   category: "",   //LLEGA UN INTEGER (ID DE CATEGORY)

  return (
    <div
      className={styles.contenedor}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className={styles.hijo}>
        <div className={styles.nombre}>
          {name} - {artist}
        </div>

        <div className={styles.cat}>{subCategories}</div>
        <div className={styles.fecha}>{date}</div>
      </div>
      <div className={styles.contBtn}>
        <NavLink className={styles.link} to={`/events/:id`}>
          <div className={styles.boton}>Mas info</div>
        </NavLink>
      </div>
    </div>
  );
}
