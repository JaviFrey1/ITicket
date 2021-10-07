/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import s from "./Carousel.module.css";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import getEvents from "../../actions/getEvents";

export default function CarouselComp() {
  // console.log(document.querySelectorAll("Carousel , button"));
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
    // { width: 850, itemsToShow: 3 },
    // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    // { width: 1450, itemsToShow: 5 },
    // { width: 1750, itemsToShow: 6 },
  ];
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsLoaded);
  const importantEvents = Array.isArray(events)? events.filter((el) => el.isImportant === true): console.log('Aun no hay eventos en el carrousel', events);

  useEffect(() => {
    dispatch(getEvents(""));
  }, [dispatch]);

  return (
    <div className={s.divRey}>
      {importantEvents.length !== 0 ? (
        <div>
          <div className={s.destacados}>Destacados</div>
          <Carousel
            enableAutoPlay
            autoPlaySpeed={3500}
            className={s.carousel}
            breakPoints={breakPoints}
          >
            {importantEvents?.map((el) => (
              <div key={el.id} className={s.itemCarousel}>
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
            ))}
          </Carousel>
        </div>
      ) : (
        <div>Aun no hay ningun evento.</div>
      )}
    </div>
  );
}
// #root > div.home_container__3zSst > div.home_contCarousel__1X2YZ > div > div > div.sc-eCstlR.bwgQCB.rec.rec-carousel > button.sc-bdfBQB.khvUfi.rec.rec-arrow.rec.rec-arrow-left
