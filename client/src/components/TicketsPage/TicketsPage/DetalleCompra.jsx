import React, { useEffect } from "react";
import Ticket from "../Ticket/Ticket";
import s from "./ticketsPage.module.css";

const DetalleCompra = ({ event }) => {
  useEffect(() => {
    // console.log("cambio en detalles=> ", event.name);
  }, [event]);

  return (
    <div>
      <div className={s.detalleCompra} id="listaTickets">
        <div className={s.tituloTickets}>
          <h3>Tus Tickets para {event[0].artist}:</h3>
          {/*<div className={s.botonDescargar}>Descargar Tickets</div>*/}
        </div>
        <div className={s.listaDeTickets}>
          {event.map((e) => {
            return (
              <div className={s.contTicket}>
                <Ticket event={e} />
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
