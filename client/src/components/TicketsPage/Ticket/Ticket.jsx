import React from "react";
import s from "./ticket.module.css";
import QRCode from "react-qr-code";
import img from "../../../images/pngLetraNegraRedimensionado.png";

const Ticket = (event) => {
  // let value = "google.com";
  let value = "546546884868";
  let artista = "Ejemplo de Artista";
  let evento = "EJEMPLO DE EVENTO";
  let fecha = "00/00/0000";
  let direccion = "CALLE FALSA 1234";
  let lugar = "LUNA PARK";
  let localidad = "BUENOS AIRES";

  return (
    <div className={s.divRey}>
      <div className={s.contTicket}>
        <div className={s.partSup}>
          <div className={s.barraAmarillaSup}></div>
          <div className={s.evento}>
            <div className={s.eventoSpan}>
              <span>{"esto vuela"}</span>
            </div>
          </div>
          <div className={s.masDatos}>
            <div className={s.spanId}>
              <p>{value}</p>
            </div>
          </div>
          <div className={s.barraAmarillaInf}></div>
        </div>

        <div className={s.partInf}>
          <div className={s.barraAmarillaSup_2}></div>

          <div className={s.evento}>
            <div className={s.eventoSpan}>
              <span>{evento}</span>
            </div>
          </div>
          <div className={s.artistaFecha}>
            <div className={s.artista}>{artista}</div>
            <div className={s.fecha}>{fecha}</div>
          </div>

          <div className={s.inferiorAbajo}>
            <div className={s.contQR} id="qr">
              <QRCode
                value={value}
                size={80}
                bgColor="white"
                fgColor="black"
                // level="H"
              />
              <div className={s.spanId}>
                <p>{value}</p>
              </div>
            </div>
            <div className={s.masDatos}>
              <div className={s.lugar}>{lugar}</div>
              <div className={s.direccion}>{direccion}</div>
              <div className={s.localidad}>{localidad}</div>
              <div className={s.contLogo}>
                <img
                  src={img}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
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
