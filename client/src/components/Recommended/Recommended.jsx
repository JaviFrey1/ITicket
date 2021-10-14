/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import s from "./recommended.module.css";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import getRecommended from "../../actions/getRecommended";
import { useAuth } from '../../context/AuthContext'
import { Link } from "react-router-dom";
export default function CarouselComp() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
  ];
  const dispatch = useDispatch();
  const recommended = useSelector((state) => state.recommended);
const {activeUser}= useAuth()
 
  const actualRecommended = recommended.filter((el)=>
  el.date >= new Date().toISOString().split('T')[0]
  );
 
  useEffect(() => {
    if(activeUser)dispatch(getRecommended(activeUser.id));
  }, [dispatch, activeUser]);

  return (
    <div className={s.divRey}>
      {actualRecommended.length !== 0 ? (
        <div>
          <div className={s.destacados}>Recomendados para ti</div>
          <Carousel
            enableAutoPlay
            autoPlaySpeed={3500}
            className={s.carousel}
            breakPoints={breakPoints}
          >
            {actualRecommended.length > 0 
              ? actualRecommended.map((el) => (
                  <Link className={s.link} to={`/events/${el.id}`} key={el.id}>
                    <div className={s.itemCarousel}>
                      <div className={s.todo}>
                        <div className={s.nombres}>
                          <div>
                            <span>{el.name}</span> -
                            {el.subCategories?.map((subcat, i) =>  (
                              <span key={i}>{subcat} - </span>
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
