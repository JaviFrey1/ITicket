// import React from "react";
// import s from "./ticket.module.css";
// import QRCode from "react-qr-code";
// import img from "../../../images/pngLetraNegraRedimensionado.png";

// const Ticket = ({ event }) => {
//   // let value = "google.com";
//   // console.log("desde ticket => ", ticket.event);
//   // let value = "546546884868";
//   // let artista = "Ejemplo de Artista";
//   // let ticket.evento = "EJEMPLO DE ticket.eventO";
//   // let fecha = "00/00/0000";
//   let dueño = "cachita chaipio";
//   let dni = "123456789";
//   let mail = "cahita@ooutlook.com";

//   return (
//     <div className={s.divRey}>
//       <div className={s.contTicket}>
//         <div className={s.partSup}>
//           <div className={s.barraAmarillaSup}></div>

//           <div className={s.contImg}>
//             <img
//               src={event.image}
//               alt=""
//               style={{
//                 margin: "0",
//                 width: "175px",
//                 height: "100px",
//               }}
//             />
//           </div>
//           <div className={s.barraAmarillaInf}></div>
//         </div>

//         <div className={s.partInf}>
//           <div className={s.barraAmarillaSup_2}></div>

//           <div className={s.ticket.evento}>
//             <div className={s.ticket.eventoSpan}>
//               <span>{event.name}</span>
//             </div>
//           </div>
//           <div className={s.artistaFecha}>
//             <div className={s.artista}>{event.artist}</div>
//             <div className={s.fecha}>{event.date}</div>
//             <div className={s.fecha}>{event.time}</div>
//           </div>

//           <div className={s.inferiorAbajo}>
//             <div className={s.contQR} id="qr">
//               {/* CAMBIAR POR EL ID!!! */}
//               <QRCode
//                 value={event.name}
//                 size={80}
//                 bgColor="white"
//                 fgColor="black"
//                 // level="H"
//               />
//               {/* CAMBIAR POR EL ID!!! */}
//               <div className={s.spanId}>
//                 <p>{event.name}</p>
//               </div>
//             </div>
//             <div className={s.masDatos}>
//               <div className={s.lugar}>{event.place}</div>
//               <div className={s.direccion}>{event.location}</div>
//               <div className={s.localidad}>{event.province}</div>
//               <div className={s.contLogo}>
//                 <div className={s.duenioData}>
//                   <div>{dueño}</div>
//                   <div>{dni}</div>
//                   <div>{mail}</div>
//                 </div>
//                 <img
//                   src={img}
//                   alt=""
//                   style={{ width: "50px", height: "50px" }}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className={s.barraAmarillaInf_2}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ticket;

import React from "react";
import s from "./ticket.module.css";
import QRCode from "react-qr-code";
import img from "../../../images/pngLetraNegraRedimensionado.png";

const Ticket = ({ticket}) => {
  console.log('ESTOY EN TICKETJSX => ',ticket)
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
              {/* CAMBIAR POR EL ID!!! */}
              <QRCode
                value={ticket.id}
                size={80}
                bgColor="white"
                fgColor="black"
                // level="H"
              />
              {/* CAMBIAR POR EL ID!!! */}
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
                  style={{ width: "50px", height: "50px" }}
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
