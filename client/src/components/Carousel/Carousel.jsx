/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import s from "./Carousel.module.css";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import getEvents from "../../actions/getEvents";
import { Link } from "react-router-dom";
export default function CarouselComp() {
  // console.log(document.querySelectorAll("Carousel , button"));
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
  ];
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsLoaded);
  const importantEvents = Array.isArray(events)
    ? events.filter((el) => el.isImportant === true)
    : console.log("Aun no hay eventos en el carrousel", events);
  const actualImportantEvents = importantEvents.filter(
    (el) => el.date >= new Date()
  );
  useEffect(() => {
    dispatch(getEvents(""));
  }, [dispatch]);

  return (
    <div className={s.divRey}>
      {actualImportantEvents.length !== 0 ? (
        <div>
          <div className={s.destacados}>Destacados</div>
          <Carousel
            enableAutoPlay
            autoPlaySpeed={3500}
            className={s.carousel}
            breakPoints={breakPoints}
          >
            {Array.isArray(actualImportantEvents)
              ? actualImportantEvents.map((el) => (
                  <Link className={s.link} to={`/events/${el.id}`} key={el.id}>
                    <div className={s.itemCarousel}>
                      <div className={s.todo}>
                        <div className={s.nombres}>
                          <div>
                            <span>{el.name}</span> -
                            {el.subCategories?.map((subcat, i) => (
                              <span key={i}>{el.subCategories} - </span>
                            ))}
                            <span>{el.date}</span>
                          </div>
                        </div>
                        <img alt="" src={el.image} />
                      </div>
                    </div>
                  </Link>
                ))
              : null}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
}
// #root > div.home_container__3zSst > div.home_contCarousel__1X2YZ > div > div > div.sc-eCstlR.bwgQCB.rec.rec-carousel > button.sc-bdfBQB.khvUfi.rec.rec-arrow.rec.rec-arrow-left
