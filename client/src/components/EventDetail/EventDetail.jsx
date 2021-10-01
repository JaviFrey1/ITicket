import { React } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./detail.module.css";
// import getEventDetail from "../../actions/getEventDetail";
import { MapContainer, TileLayer, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { iconLocation } from "./iconLocation";
// import icon from "./icon.png";

export default function EventDetail(props) {
  const dispatch = useDispatch();

  // const eventDetail = useSelector((state) => state.eventDetail);
  const eventDetail = {
    name: "Stoned Jesus",
    categoria: "Rock",
    date: "1/15/2021",
    place: "Av. Eduardo Madero 470, C1106 CABA",
    price: 400,
    id: 15,
    lat: "-34.60209446287753",
    long: "-58.368416301881304",
    img: "https://p4.wallpaperbetter.com/wallpaper/660/285/302/seven-thunders-roar-stoned-jesus-stoner-metal-indian-skull-and-bones-forest-album-covers-cover-art-wallpaper-preview.jpg",
  };

  useEffect(() => {
    // dispatch(getEventDetail(props.match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const colorCirculoMarcador = {
    color: "rgb(255, 204, 0)",
    fillColor: "rgb(255, 204, 0)",
  };
  return (
    <div className={s.container}>
      <div className={s.data}>
        <div className={s.name}>
          {eventDetail.name}
        </div>
        <div className={s.cat}>
          {eventDetail.categoria}
        </div>
        <div className={s.date}>
          {eventDetail.date}
        </div>
        <div className={s.place}>
          {eventDetail.place}
        </div>
        <div>
          <button className={s.btn}>
            -
          </button>
          $ {eventDetail.price}
          <button className={s.btn} onClick={() => eventDetail.price = eventDetail.price + 400}>
            +
          </button>
        </div>
        <button className={s.buy}>
          COMPRAR AHORA
        </button>
      </div>
      <MapContainer className={s.mapa}
        center={[eventDetail.lat, eventDetail.long]}
        zoom={23}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={[eventDetail.lat, eventDetail.long]}
          pathOptions={colorCirculoMarcador}
          radius={20}
        >
          <Popup>
            {eventDetail.nombre} <br /> {eventDetail.lugar}
          </Popup>
        </Circle>
      </MapContainer>
    </div>
  );
}
