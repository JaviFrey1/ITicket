import React from "react";
import { useSelector } from "react-redux";
import Event from "../Event/Event";
import s from "./wishlist.module.css";

export function WishList() {
  const wishEvents = useSelector((state) => state.wishEvents);
  return (
    <div className={s.page}>
      <div className={s.container}>
        <h2 className={s.titulo}> Estos eventos te han interesado!</h2>
        {wishEvents ? (
          <div className={s.cards}>
            {wishEvents.map((we) => {
              return (
                <div key={we.id} className={s.event}>
                  <Event event={we}/>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default WishList;
