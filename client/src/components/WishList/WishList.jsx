import React from "react";
import Event from "../Event/Event";
import s from "./wishlist.module.css";
import { loadState} from "../../localStorage";

export function WishList() {
  const favorites = loadState();
  favorites.shift()
  return (
    <div className={s.page}>
      <div className={s.container}>
        <h2 className={s.titulo}> Estos eventos te han interesado!</h2>
        {favorites ? (
          <div className={s.cards}>
            {favorites.map(fav => {
             const parsedFav = JSON.parse(fav)
              return (
                <div key={parsedFav.id} className={s.event}>
                  <Event event={parsedFav}/>
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
