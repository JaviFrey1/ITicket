

import React from "react";
import s from "./ticket.module.css";
import QRCode from "react-qr-code";
import img from "../../../images/pngLetraNegraRedimensionado.png";

const Ticket = ({ticket}) => {
  return (
    <div className={s.divRey}>
      <div className={s.contTicket}>
        <div className={s.partSup}>
          <div className={s.barraAmarillaSup}></div>

          <div className={s.contImg}>
            <img
              src={ticket.event.image}
              alt=""
              style={{
                margin: "0",
                width: "175px",
                height: "100px",
              }}
            />
          </div>
          <div className={s.barraAmarillaInf}></div>
        </div>

        <div className={s.partInf}>
          <div className={s.barraAmarillaSup_2}></div>

          <div className={s.evento}>
            <div className={s.eventoSpan}>
              <span>{ticket.event.name}</span>
            </div>
          </div>
          <div className={s.artistaFecha}>
            <div className={s.artista}>{ticket.event.artist}</div>
            <div className={s.fecha}>{ticket.event.date}</div>
            <div className={s.fecha}>{ticket.event.time}</div>
          </div>

          <div className={s.inferiorAbajo}>
            <div className={s.contQR} id="qr">
              <QRCode
                value={ticket.id.toString()}
                size={100}
                bgColor="white"
                fgColor="black"
                // level="H"
              />
              
              <div className={s.spanId}>
                <p>{ticket.id}</p>
              </div>
            </div>
            <div className={s.masDatos}>
              <div className={s.lugar}>{ticket.event.place}</div>
              <div className={s.direccion}>{ticket.event.location}</div>
              <div className={s.localidad}>{ticket.event.province}</div>
              <div className={s.contLogo}>
                <div className={s.duenioData}>
                  <div>{ticket.propietario}</div>
                </div>
                <img
                  src={img}
                  alt=""
                  // style={{ width: "30px", height: "30px" }}
                />
              </div>
            </div>
          </div>
          <div className={s.barraAmarillaInf_2}></div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
