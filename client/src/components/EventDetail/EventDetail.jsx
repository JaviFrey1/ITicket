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

  useEffect(() => {
    dispatch(getEventDetail(props.match.params.id))

    setTimeout(() => {
      setLoading(false)

    }, 5000);

  }, []);

  // useEffect(()=>{
  //   buscar()
  // },[eventDetail.address])



  async function buscar() {
    console.log('ADDRESS buscar', eventDetail.address)
    const results = await provider
      .search({
        query: eventDetail.address,
      })
      .then((results) => {
        setLat(results[0].y.toString());
        setLong(results[0].x.toString());
      });

    return results;
  }
  const colorCirculoMarcador = {
    color: "rgb(255, 204, 0)",
    fillColor: "rgb(255, 204, 0)",
  };
  {
    console.log('ADDRESS', eventDetail.address)
  }
  return (
    <div className={s.container}>
      <div className={s.data}>
        <div className={s.image}>
          <img alt="Banner" src={eventDetail.image} width="200px" />
        </div>
        <div className={s.name}>{eventDetail.name}</div>
        <div className={s.artist}>{eventDetail.artist}</div>

        <div className={s.date}>{eventDetail.date}</div>
        <div className={s.time}>{eventDetail.time}</div>
        <div className={s.place}>{eventDetail.place}</div>
        <div className={s.address}>{eventDetail.address}</div>
        <div>$ {eventDetail.price}</div>
        <div className={s.availableTickets}>
          {eventDetail.availableTickets <= 10 ? (
            <h5>
              Quedan solo {eventDetail.availableTickets} entradas disponibles,
              no te quedes sin la tuya!!
            </h5>
          ) : null}
        </div>
        <div>
          {/* {eventDetail? buscar():null} */}
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
            <p>cargando bro</p>
          )}
        </div>

        <button className={s.buy}>COMPRAR AHORA</button>
      </div>
    </div>
  );
}