import Event from "../Event/Event";
import s from "./Events.module.css";
import {
  Duki,
  Metallica,
  Jesus,
  Sosa,
  Duki2,
  Metallica2,
  Jesus2,
  Sosa2,
  Duki3,
  Metallica3,
  Jesus3,
  Sosa3,
} from "../../cartas";

const obj = [
  Duki,
  Metallica,
  Jesus,
  Sosa,
  Duki2,
  Metallica2,
  Jesus2,
  Sosa2,
  Duki3,
  Metallica3,
  Jesus3,
  Sosa3,
];

export default function Events() {
  return (
    <div className={s.divRey}>
      {obj.length === 0 ? (
        <div>Not many events humg?</div>
      ) : (
        obj.map((el, i) => (
          <Event
            key={i}
            name={el.name}
            artist={"artist"}
            image={el.image}
            subCategories={el.subCategories}
            date={el.date}
          />
        ))
      )}
    </div>
  );
}
