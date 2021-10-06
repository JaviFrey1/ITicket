import Event from "../Event/Event";
import s from "./Events.module.css";

export default function Events( {events} ) {
  return (
    <div className={s.divRey}>
      {Array.isArray(events) ?    
        events.map((event) => {
        return (
          <div className={s.contEvents} key={event.id}>
            <Event event={event} />
          </div>
        );
      })
        : (<div>No hay eventos disponibles</div> )}
    </div>
  );
}
