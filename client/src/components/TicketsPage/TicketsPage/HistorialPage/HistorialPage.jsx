import React, { useState, useEffect } from "react";
import s from "./historialPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartas } from "../../../../cartas";
import userData from "../../../../actions/userData";
import getTickets from "../../../../actions/getTickets";

const Historialpage = () => {


  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets)
  const activeUser = useSelector((state) => state.activeUser)
  const history = tickets.filter((ticket) => ticket.event.date < new Date().toISOString().split('T')[0])

  useEffect(() => {
    dispatch(userData());
    dispatch(getTickets(activeUser.id))
  },[])
  
  return (
    <div className={s.divRey}>
      <div className={s.contenedor}>
        <div className={s.titulo}>Historial de compra:</div>
        {history.length > 0? history.map((el, i) => {
          return (
            <div className={s.contItem} key={i}>
              <div className={s.nameArtist}>
                <div>{el.event.name}</div>
                <div>{el.event.artist}</div>
              </div>
              <div className={s.placeDate}>
                <div>{el.event.place}</div>
                <div>{el.event.date}</div>
              </div>

              <div className={s.locationAddress}>
                <div>{el.event.location}</div>
                <div>{el.event.address}</div>
              </div>

              <div className={s.timePrice}>
                <div>{el.event.time}hs</div>
                <div>ar$-{el.event.price}</div>
              </div>
            </div>
          );
        }) : <div>Tu historial esta vacio.</div>}
      </div>
    </div>
  );
};

export default Historialpage;
