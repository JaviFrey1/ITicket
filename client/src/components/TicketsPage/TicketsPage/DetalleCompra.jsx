import React, { useState, useEffect } from "react";
import Ticket from "../Ticket/Ticket";
import s from "./ticketsPage.module.css";
import Swal from "sweetalert2";


// const DetalleCompra = ({ event }) => {
//   useEffect(() => {
//     // console.log("cambio en detalles=> ", event.name);
//   }, [event]);

//   return (
//     <div>
//       <div className={s.detalleCompra} id="listaTickets">
//         <div className={s.tituloTickets}>
//           <h3>Tus Tickets para {event[0].artist}:</h3>
//           {/*<div className={s.botonDescargar}>Descargar Tickets</div>*/}
//         </div>
//         <div className={s.listaDeTickets}>
//           {event.map((e) => {
//             return (
//               <div className={s.contTicket}>
//                 <Ticket event={e} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetalleCompra;

const DetalleCompra = (artistaTickets) => {
  const [propietario, setPropietario] = useState("");


  function handleClick(id) {
    Swal.fire({
      title: "Ingresa nombre completo del nuevo propietario",
      input: "text",
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.value) {
        //  console.log('nuevo prop')
        setPropietario(resultado.value);
        console.log("Nuevo Prop, " + propietario);
      }
    });

    dispatch(updateTicket(id, propietario));
  }

  useEffect(() => {

    // console.log("cambio en detalles=> ", event.name);
  }, []);

  return (
    <div>
      <div className={s.detalleCompra} id="listaTickets">
        <div className={s.tituloTickets}>
          <h3>Tus Tickets para {artistaTickets[0]?.event.artist}:</h3>
          {/*<div className={s.botonDescargar}>Descargar Tickets</div>*/}
        </div>
        <div className={s.listaDeTickets}>
          {artistaTickets.map((e) => {
            return (
              <div className={s.contTicket} key={e.id}>
                <Ticket ticket={e} />
                <div onClick={() => handleClick(e.id)}>
                  <p>Transferir entrada</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetalleCompra;

// import React, { Component } from "react";

// export default class DetalleCompra extends Component {
//   constructor(event) {
//     super(event);
//     this.state = event;
//   }

//   render() {
//     console.log("=>>", this.state.event);
//     return (
//       <div>
//         <div className={s.detalleCompra} id="listaTickets">
//           <div className={s.tituloTickets}>
//             <h3>Tus Tickets para {this.state.artist}:</h3>
//             <div className={s.botonDescargar}>Descargar Tickets</div>
//           </div>
//           <div className={s.listaDeTickets}>
//             {this.state.event.map((e) => {
//               return (
//                 <div className={s.contTicket}>
//                   <Ticket event={e} />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
