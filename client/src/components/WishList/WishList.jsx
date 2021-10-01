import React from "react";
import { useSelector } from "react-redux";
import Event from "../Event/Event";
import s from "./wishlist.module.css";

export function WishList() {
  const wishEvents = useSelector((state) => state.wishEvents);
  return (
    <div>
      <h2 className={s.h2}>Estos eventos te han interesado!</h2>
     <div className={`${s.wishEvents}`}>
      <div className={`${s.container}`}>
        {wishEvents ? (
          <div className={`${s.cards}`}>
            {wishEvents.map((we) => {
              return (
                <div classname={s.event} key={we.id}>
                  <Event
                    event={we}
                    
                  />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
    </div>
  );
}

export default WishList;
