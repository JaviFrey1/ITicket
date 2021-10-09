/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./detail.module.css";
import getEventDetail from "../../actions/getEventDetail";
import deleteEvent from "../../actions/deleteEvent";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { MapContainer, TileLayer, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { NavLink } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function EventDetail(props) {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [loading, setLoading] = useState(true);

  const provider = new OpenStreetMapProvider();
  const history = useHistory();
  const dispatch = useDispatch();

  const eventDetail = useSelector((state) => state.eventDetail);

  function handleDelete(eventDetail) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteEvent(eventDetail.id));
        Swal.fire({
          title: "Deleted!",
          text: `${eventDetail.artist}'s event has been deleted.`,
          imageUrl: "https://i.gifer.com/7efs.gif",
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
        history.push("/home");
      }
    });
  }

  async function buscar(e) {
    try {
      const results = await provider
        .search({
          query: e,
        })
        .then((results) => {
          setLat(results[0].y.toString());
          setLong(results[0].x.toString());
        });

      return results;
    } catch (error) {
      console.log("rompio mapa");
      setLat("-38.416097");
      setLong("-63.616672");
    }
  }

  useEffect(() => {
    dispatch(getEventDetail(props.match.params.id)).then((results) => {
      const fullAdress =
        results.payload.address +
        "," +
        results.payload.location +
        "," +
        results.payload.province;
      // console.log(results.payload.address);
      buscar(fullAdress);
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // useEffect(()=>{
  //   buscar()map
  // },[eventDetail.address])

  const colorCirculoMarcador = {
    color: "rgb(255, 204, 0)",
    fillColor: "rgb(255, 204, 0)",
  };

  return (
    <div className={s.container}>
      <div className={s.forma}></div>
      <div className={s.forma2}></div>
      <div className={s.data}>
        <div className={s.image}>
          <img
            alt="Banner"
            src={eventDetail.image}
            width="100%"
            height="100%"
          />
        </div>
        <div className={s.title}>
          <div className={s.name}>{eventDetail.name}</div>

          <div className={s.contBtn}>
            <div className={s.contlapiz}>
              <NavLink to={`/update/${eventDetail.id}`}>
                <div className={s.lapiz}>
                  <GoPencil className={s.link} />
                </div>
              </NavLink>
            </div>
            <div className={s.contrash}>
              <div className={s.trashbin}>
                <BsFillTrashFill
                  className={s.trash}
                  onClick={() => handleDelete(eventDetail)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={s.contboth}>
          <div className={s.contmid}>
            <div className={s.artist}>{eventDetail.artist}</div>
            <div className={s.date_time}>
              <div className={s.date}>{eventDetail.date}</div>

              <div className={s.time}>{eventDetail.time}hs</div>
            </div>
          </div>
          <div className={s.subcategories}>
            <div className={s.sub}>
              {eventDetail.subCategories?.map((subCat, i) => (
                <span key={i}>{subCat.genre}</span>
              ))}
            </div>
          </div>
          <div className={s.contbot}>
            <div className={s.place_address}>
              <div className={s.place}>{eventDetail.place}</div>
              <div className={s.address}>{eventDetail.address}</div>
              {eventDetail.location === eventDetail.province ? (
                <div className={s.location}>{eventDetail.location}</div>
              ) : (
                <div>
                  {eventDetail.location}, {eventDetail.province}
                </div>
              )}
            </div>
            <div className={s.foot}>
              <div className={s.availableTickets}>
                {eventDetail.availableTickets <= 10 ? (
                  <h5>
                    Quedan solo {eventDetail.availableTickets} entradas
                    disponibles, no te quedes sin la tuya!!
                  </h5>
                ) : null}
              </div>
              <div className={s.price_buy}>
                <div className={s.price}>
                  <span>${eventDetail.price}</span>
                </div>
                <button className={s.buy}>COMPRAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.contMapa}>
        {!loading ? (
          <MapContainer
            className={s.mapa}
            center={[lat, long]}
            zoom={lat === "-38.416097" ? 1 : 23}
          >
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
