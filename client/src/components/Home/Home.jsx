/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getEvents from "../../actions/getEvents";

import Paginate from "../paginate/Paginate.jsx";
import SearchBar from "../SearchBar/SearchBar";
import s from "./home.module.css";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import CarouselComp from "../Carousel/Carousel";
import { setPage } from "../../actions";

export default function Home() {
  const dispatch = useDispatch();
  const allEvents = useSelector((state) => state.eventsLoaded);
  const {title, page} = useSelector(state => state) 

  useEffect(()=> {
    dispatch(getEvents({}))
  }, [dispatch])

  const changePage = (page) => {
    console.log('SOY PAGE',page)
    dispatch(getEvents({page,title}))
    dispatch(setPage(page))

  }


  return (
    <div className={`${s.container}`}>
      <div className={`${s.searchBar}`}>
        <SearchBar />
      </div>
      <div className={s.contCarousel}>
        <CarouselComp />
      </div>

      <div className={s.card}>
        <Events events={allEvents}/>

        <button disabled={page - 1 === 0} onClick={() => changePage(page)}>Prev</button>
        <label style={{color:"black", width:"50px"}}>{page}</label>
        <button onClick={() => changePage(page +1)}>Next</button>  


      </div>
      <div className={s.fot}>
        <Footer />
      </div>
    </div>
  );
}
