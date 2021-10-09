import React from "react";
import { useSelector } from "react-redux";
import Event from "../Event/Event";
import s from "./wishlist.module.css";

export function WishList() {
  const wishEvents = useSelector((state) => state.wishEvents);
  return (
<<<<<<< HEAD
    <div>
      <h2 className={s.h2}>Estos eventos te han interesado!</h2>
     <div className={`${s.wishEvents}`}>
      <div className={`${s.container}`}>
=======
    <div className={s.page}>
      <div className={s.container}>
        <h2 className={s.titulo}> Estos eventos te han interesado!</h2>
>>>>>>> 2896fe95e9656eed7e9e908d034814581cfa253e
        {wishEvents ? (
          <div className={s.cards}>
            {wishEvents.map((we) => {
              return (
<<<<<<< HEAD
                <div classname={s.event} key={we.id}>
                  <Event
                    event={we}
                    
                  />
=======
                <div key={we.id} className={s.event}>
                  <Event event={we}/>
>>>>>>> 2896fe95e9656eed7e9e908d034814581cfa253e
                </div>
              );
            })}
          </div>
        ) : <div>Aun no tienes eventos en favoritos</div>}
      </div>
    </div>
    </div>
  );
}

export default WishList;
