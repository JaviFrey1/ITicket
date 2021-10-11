import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import Ticket from "./../Ticket/Ticket";
import s from "./ticketsPage.module.css";
// import Swal from "sweetalert2";
// import BotonPrint from "./Button";
import DetalleCompra from "./DetalleCompra";
import { ImPrinter } from "react-icons/im";
import { BiHistory } from "react-icons/bi";
import getTickets from "../../../actions/getTickets";
import userData from "../../../actions/userData";


const Ticketspage = () => {
  const dispatch = useDispatch();

  const componentRef = useRef();

  const activeUser = useSelector((state) => state.activeUser);

  const tickets = useSelector((state) => state.tickets);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [eventSel, setEventSel] = useState('');

  let artistas = [];

  tickets.map((ticket) => {
    if (!artistas.includes(ticket.event.artist)) {
      artistas.push(ticket.event.artist);
    }
  });

  function cambiar(e) {
    setEventSel(e);
  }

  useEffect(() => {
    dispatch(getTickets(activeUser.id));
    dispatch(userData())
  }, [eventSel]);

  return (
    <div className={s.divRey}>
      <div className={s.contListaCompra}>
        <div className={s.pestanias}>
          <div className={s.pestania}>
            <h4>Eventos Activos</h4>
          </div>
        </div>
        {artistas.map((artista) => {
          const artistaTickets = [];
          tickets.map((ticket) => {
            if (ticket.event.artist === artista) artistaTickets.push(ticket);
          });
          return (
            <div
              key={artista}
              className={s.itemListaCompra}
              onClick={() => {
                console.log("==>> hola");
                cambiar(artistaTickets);
              }}
            >
              <div className={s.artistDate}>
                <div>{artista}</div>
              </div>
            </div>
          );
        })}
        {/*---------------------------------------------------------------------*/}

        {/*<div
          className={s.itemListaCompra}
          onClick={() => {
            cambiar([cartas[1], cartas[1]]);
          }}
        >
          <div className={s.artistDate}>
            <div>{cartas[1].artist}</div>
            <div>{cartas[1].date}</div>
          </div>
          <div className={s.placeLocation}>
            <div>{cartas[1].place}</div>
            <div>{cartas[1].location}</div>
          </div>
        </div>

        <div
          className={s.itemListaCompra}
          onClick={() => {
            // console.log([cartas[2], cartas[2], cartas[2]]);
            cambiar([cartas[2], cartas[2], cartas[2]]);
          }}
        >
          <div className={s.artistDate}>
            <div>{cartas[2].artist}</div>
            <div>{cartas[2].date}</div>
          </div>
          <div className={s.placeLocation}>
            <div>{cartas[2].place}</div>
            <div>{cartas[2].location}</div>
          </div>
        </div>
        {}*/}
        {/*---------------------------------------------------------------------*/}
      </div>
      <div>
        <div className={s.contBotones}>
          <div
            className={s.botonImpr}
            onClick={() => {
              console.log("click");
              handlePrint();
            }}
          >
            <p>Imprimir!</p>
            <ImPrinter />
          </div>
          <Link to="/historial" className={s.linkBoton}>
            <div className={s.botonImpr2}>
              <p>Historial!</p>
              <BiHistory />
            </div>
          </Link>
        </div>
        <div ref={componentRef}>
          <DetalleCompra event={eventSel} />
        </div>
      </div>
    </div>
  );
};

export default Ticketspage;
