import React from "react";
import { useSelector } from "react-redux";
import Card from "../Event/Event";
import s from "./wishlist.module.css";

export function WishList(props) {
  const wishEvents = useSelector((state) => state.wishEvents);
  return (
    <div className={`${s.wishEvents}`}>
      <div className={`${s.container}`}>
        <h2>Estos eventos te han interesado!</h2>
        {wishEvents ? (
          <div className={`${s.cards}`}>
            {wishEvents.map((we) => {
              return (
                <div key={we.id}>
                  <Card
                    event={we}
                    
                  />
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
