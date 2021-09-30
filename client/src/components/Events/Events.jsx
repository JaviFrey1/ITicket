import Event from "../Event/Event";
import s from "./Events.module.css";



export default function Events({events}) {
  console.log('EVENTS', events)
  return (
    <div className={s.divRey}>

      {events.length>0? events.map(event=>{return(

        <li key={event.id}>

          <Event
          event={event}
         
        />
        </li>
      )
      }) : (<h1>No hay eventos disponibles</h1>)}
    </div>
  );
}
