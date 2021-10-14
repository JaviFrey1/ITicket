import React, { useState, useEffect } from "react";
import Ticket from "../Ticket/Ticket";
import s from "./ticketsPage.module.css";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import updateTicket from "../../../actions/updateTickets";




const DetalleCompra = ({ artistaTickets }) => {
  const dispatch = useDispatch();
  


  function handleClick(id) {
    console.log('soy id de ticket', id)
    Swal.fire({
      title: "Ingresa nombre completo del nuevo propietario",
      input: "text",
      
      confirmButtonText: "Guardar",
      confirmButtonColor: 'rgb(255,204,0)',
      cancelButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.value) {
       
        dispatch(updateTicket(id, resultado.value));
        console.log("Nuevo Prop, ", resultado.value);
      }
    });
  }

  useEffect(() => {
    console.log('Actualizacion')
  }, [dispatch]);

  return (
    <div>
      <div className={s.detalleCompra} id="listaTickets">
        <div className={s.tituloTickets}>
          <h3>Tus Tickets para {artistaTickets[0]?.event.artist}:</h3>

        </div>
        <div className={s.listaDeTickets}>
          {Array.isArray(artistaTickets) ? artistaTickets.map((e) => {
            return (
              <div className={s.contTicket} key={e.id}>
                <Ticket ticket={e} />
                <div className={s.botonTransferir} onClick={() => handleClick(e.id)}>
                  <p>Transferir tickets</p>
                </div>
              </div>
            );
          }) : <div>Selecciona un artista de la lista!</div>}
        </div>
      </div>
    </div>
  );
};

export default DetalleCompra;

