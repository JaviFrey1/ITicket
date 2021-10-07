import React from "react";
import Ticket from "./../Ticket/Ticket";
import s from "./ticketsPage.module.css";

const Ticketspage = () => {
  return (
    <div className={s.divRey}>
      <div className={s.contListaCompra}>
        <div className={s.itemListaCompra}></div>
      </div>
      <div className={s.detalleCompra}>
        <div className={s.contTicket}>
          <Ticket />
        </div>
        <div className={s.contTicket}>
          <Ticket />
        </div>
      </div>
    </div>
  );
};

export default Ticketspage;
