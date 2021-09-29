import React from "react";
import s from "./Carousel.module.css";
import Carousel from "react-elastic-carousel";
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

export default function CarouselComp() {
  console.log(document.querySelectorAll("Carousel , button"));

  return (
    <div className={s.divRey}>
      <Carousel
        enableAutoPlay
        autoPlaySpeed={3500}
        className={s.carousel}
        itemsToShow={1}
      >
        <div className={s.itemCarousel}>
          <img alt="" src={Metallica.img} />
        </div>
        <div className={s.itemCarousel}>
          <img alt="" src={Duki.img} />
        </div>
        <div className={s.itemCarousel}>
          <img alt="" src={Sosa.img} />
        </div>
        <div className={s.itemCarousel}>
          <img alt="" src={Metallica.img} />
        </div>
        <div className={s.itemCarousel}>
          <img alt="" src={Jesus.img} />
        </div>
      </Carousel>
    </div>
  );
}
// #root > div.home_container__3zSst > div.home_contCarousel__1X2YZ > div > div > div.sc-eCstlR.bwgQCB.rec.rec-carousel > button.sc-bdfBQB.khvUfi.rec.rec-arrow.rec.rec-arrow-left
