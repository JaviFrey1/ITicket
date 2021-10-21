import React, { useEffect, useState } from "react";
import Ticket from "../Ticket/Ticket";
import s from "./ticketsPage.module.css";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import updateTicket from "../../../actions/updateTickets";
import { useHistory } from "react-router";
import checkPass from "../../../actions/checkPass";
import { useAuth } from '../../../context/AuthContext'





const DetalleCompra = ({ artistaTickets }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { activeUser } = useAuth()
  const check = useSelector(state => state.check)
  const [checkDone, setCheckDone] = useState('')

  function handleClick(id) {
    Swal.fire({
      title: "Ingresa tu contraseña",
      input: "password",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      confirmButtonColor: 'rgb(255,204,0)',
      cancelButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.value) {
        dispatch(checkPass(activeUser.id, resultado.value))
        setTimeout(function () {
        if (checkDone === 'success') {
          Swal.fire({
            title: "Ingresa el nombre completo del nuevo propietario",
            input: "text",
            showCancelButton: true,

            confirmButtonText: "Guardar",
            confirmButtonColor: 'rgb(255,204,0)',
            cancelButtonText: "Cancelar",
          }).then((resultado) => {
            if (resultado.value) {
              dispatch(updateTicket(id, resultado.value));
              history.push('/home')
            }
          });
        } else {
          Swal.fire({
            title: "Contraseña incorrecta",
            text: "Lo lamento, no puedes transferir la entrada",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              history.push("/home");
            }
          });
        }},3000)
      }
    });

  }

  useEffect(() => {
    setTimeout(function () {

      if (check === 'Las contraseñas coinciden') {
        setCheckDone('success')
      }
      else {
        setCheckDone('denied')

      }

    }, 1000);
  }, [check]);

  return (
    <div>
      <div className={s.detalleCompra} id="listaTickets">
        <div className={s.tituloTickets}>
          <h3>Mis Tickets para {artistaTickets[0]?.event.artist}:</h3>

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

