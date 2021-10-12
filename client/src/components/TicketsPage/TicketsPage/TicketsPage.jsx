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
  console.log('Tickets >>> ', tickets)


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
    dispatch(userData())
    console.log('user ID >>> ', activeUser.id)
    // dispatch(getTickets(activeUser.id))
    if (activeUser) dispatch(getTickets(activeUser.id));

  }, []);

  // if(activeUser) dispatch(getTickets(activeUser.id));



  return (

    <div className={s.divRey}>

      <div className={s.contListaCompra}>
        <div className={s.pestanias}>
          <div className={s.pestania}>
            <h4>Eventos Activos</h4>
          </div>
        </div>
        {artistas.length ? artistas.map((artista, i) => {
          console.log('lonely', artista)
          const artistaTickets = [];
          tickets.map((ticket, i) => {
            if (ticket.event.artist === artista && ticket.event.date >= new Date().toISOString().split('T')[0]) artistaTickets.push(ticket);
          });
          console.log('tengo alos artickets', artistaTickets)
          return (
            <div
              key={i}
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
        }) : <div style={{ margin: '20px' }}>No tienes entradas</div>}
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
          <Link to="/historial" className={s.linkBoton} >
            <div className={s.botonImpr2}>
              <p>Historial!</p>
              <BiHistory />
            </div>
          </Link>
        </div>
        {console.log('deberian ser artista tickets', eventSel)}
        <div ref={componentRef}>
          <DetalleCompra artistaTickets={eventSel} />
        </div>
      </div>
    </div>
  );
};

export default Ticketspage;
