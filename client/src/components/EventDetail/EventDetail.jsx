/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./detail.module.css";
import getEventDetail from "../../actions/getEventDetail";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { MapContainer, TileLayer, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function EventDetail(props) {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [loading, setLoading] = useState(true);

  const provider = new OpenStreetMapProvider();

  const dispatch = useDispatch();

  const eventDetail = useSelector((state) => state.eventDetail);

  async function buscar(e) {
    const results = await provider
      .search({
        query: e,
      })
      .then((results) => {
        setLat(results[0].y.toString());
        setLong(results[0].x.toString());
      });

    return results;
  }

  useEffect(() => {
    dispatch(getEventDetail(props.match.params.id)).then((results) => {
      const fullAdress = results.payload.address + ',' + results.payload.location + ',' + results.payload.province
      // console.log(results.payload.address);
      buscar(fullAdress);
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // useEffect(()=>{
  //   buscar()
  // },[eventDetail.address])

  const colorCirculoMarcador = {
    color: "rgb(255, 204, 0)",
    fillColor: "rgb(255, 204, 0)",
  };

  return (
    <div className={s.container}>
      <div className={s.data}>
        <div className={s.image}>
          <img
            alt="Banner"
            src={eventDetail.image}
            width="100%"
            height="100%"
          />
        </div>
        <div className={s.name}>{eventDetail.name}</div>

        <div className={s.artist_date}>
          <div className={s.artist}>{eventDetail.artist}</div>
          <div className={s.date}>{eventDetail.date}</div>
        </div>

        <div className={s.place_address}>
          <div className={s.place}>{eventDetail.place}</div>
          <div className={s.address}>{eventDetail.address}</div>
          <div className={s.location}>{eventDetail.location}</div>
          <div className={s.province}>{eventDetail.province}</div>
        </div>

        <div className={s.time}>{eventDetail.time}'min(aprox)</div>

        <div className={s.availableTickets}>
          {eventDetail.availableTickets <= 10 ? (
            <h5>
              Quedan solo {eventDetail.availableTickets} entradas disponibles,
              no te quedes sin la tuya!!
            </h5>
          ) : null}
        </div>
        <div className={s.price_buy}>
          <div>$ {eventDetail.price}</div>
          <button className={s.buy}>COMPRAR</button>
        </div>
      </div>

      <div className={s.contMapa}>
        {!loading ? (
          <MapContainer className={s.mapa} center={[lat, long]} zoom={23}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle
              center={[lat, long]}
              pathOptions={colorCirculoMarcador}
              radius={20}
            >
              <Popup>
                {eventDetail.nombre} <br /> {eventDetail.lugar}
              </Popup>
            </Circle>
          </MapContainer>
        ) : (
          <div className={s.placeHolderMapa}>
            <p>cargando Mapa</p>
          </div>
        )}
      </div>
    </div>
  );
}
