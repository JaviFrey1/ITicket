import React from "react";
// import { useSelector } from "react-redux";
import Event from "../Event/Event";
import s from "./wishlist.module.css";
import { loadState} from "../../localStorage";

export function WishList() {
  // const wishEvents = useSelector((state) => state.wishEvents);
  const favorites = loadState();
  console.log('Soy favorites',favorites)
  return (
    <div className={s.page}>
      <div className={s.container}>
        <h2 className={s.titulo}> Estos eventos te han interesado!</h2>
        {favorites ? (
          <div className={s.cards}>
            {favorites.slice(1).map(fav => {
              JSON.parse(fav);
              return (
                <div key={fav.id} className={s.event}>
                  <Event event={fav}/>
                </div>
              );
            })}
          </div>
        ) : <div>Aun no tienes eventos en favoritos</div>}
      </div>
    </div>
  );
}

export default WishList;
