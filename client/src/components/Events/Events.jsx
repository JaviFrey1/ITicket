import Event from "../Event/Event";
import s from "./Events.module.css";



export default function Events({events}) {
  return (
    <div className={s.divRey}>

      {events.length>0? events.map(event=>{return(

        <div key={event.id}>

          <Event
          event={event}
         
        />
        </div>
      )
      }) : (<h1>No hay eventos disponibles</h1>)}
    </div>
  );
}
