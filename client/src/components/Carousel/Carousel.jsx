import React from "react";
import s from "./Carousel.module.css";
import Carousel from "react-elastic-carousel";
import { Duki, Metallica, Jesus, Sosa } from "../../cartas";

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

  return (
    <div className={s.divRey}>
      <Carousel
        enableAutoPlay
        autoPlaySpeed={3500}
        className={s.carousel}
        breakPoints={breakPoints}
      >
        <div className={s.itemCarousel}>
          <img alt="" src={Metallica.image} />
        </div>
        <div className={s.itemCarousel}>
          <img alt="" src={Duki.image} />
        </div>
        <div className={s.itemCarousel}>
          <img alt="" src={Sosa.image} />
        </div>
        <div className={s.itemCarousel}>
          <img alt="" src={Metallica.image} />
        </div>
        <div className={s.itemCarousel}>
          <img alt="" src={Jesus.image} />
        </div>
      </Carousel>
    </div>
  );
}
// #root > div.home_container__3zSst > div.home_contCarousel__1X2YZ > div > div > div.sc-eCstlR.bwgQCB.rec.rec-carousel > button.sc-bdfBQB.khvUfi.rec.rec-arrow.rec.rec-arrow-left
