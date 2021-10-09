import React, { useState } from "react";
import s from "./historialPage.module.css";

import { cartas } from "../../../../cartas";

const Historialpage = () => {
  const [listaDeEventosFake, setListaDeEventosFake] = useState([
    cartas[0],
    cartas[5],
    cartas[2],
    cartas[4],
  ]);

  return (
    <div className={s.divRey}>
      <div className={s.contenedor}>
        <div className={s.titulo}>Historial de compra:</div>
        {listaDeEventosFake.map((el) => {
          return (
            <div className={s.contItem}>
              <div className={s.nameArtist}>
                <div>{el.name}</div>
                <div>{el.artist}</div>
              </div>
              <div className={s.placeDate}>
                <div>{el.place}</div>
                <div>{el.date}</div>
              </div>

              <div className={s.locationAddress}>
                <div>{el.location}</div>
                <div>{el.address}</div>
              </div>

              <div className={s.timePrice}>
                <div>{el.time}hs</div>
                <div>ar$-{el.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Historialpage;
