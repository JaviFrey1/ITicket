/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getEvents from "../../actions/getEvents";
import Paginate from "../Paginate/Paginate";
import { cartas } from "../../cartas";
import SearchBar from "../SearchBar/SearchBar";
import s from "./home.module.css";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import CarouselComp from "../Carousel/Carousel";
import bulkEvents from "../../actions/bulkEvents";
import Recommended from '../Recommended/Recommended'
export default function Home() {
  const dispatch = useDispatch();
  const allEvents = useSelector((state) => state.eventsLoaded);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);

  const lastEvent = currentPage * eventsPerPage;
  const firstEvent = lastEvent - eventsPerPage;

  const unImportantEvents = Array.isArray(allEvents)
    ? allEvents.filter((el) => el.isImportant === false)
    : console.log("Aun no hay eventos en el carrousel", allEvents);

  const actualUnImportantEvents = []

  unImportantEvents.forEach((el)=>{
      if( el.date >=  new Date().toISOString().split('T')[0]) actualUnImportantEvents.push(el);
    })
  
  const currentUnimportantEvents = actualUnImportantEvents.slice(
    firstEvent,
    lastEvent
  );

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getEvents(""));
    dispatch(bulkEvents(cartas));
  }, [dispatch]);

 
  return (
    <div className={`${s.container}`}>
      <div className={`${s.searchBar}`}>
        <SearchBar />
      </div>
      <div className={s.contCarousel}>
        <CarouselComp />
      </div>
      <div className={s.contCarousel}>
        {/* <Recommended />*/}
        <Recommended />
      </div>

      <div className={s.card}>
        <Events events={currentUnimportantEvents} />

      </div>
      <div>
        <div>
          <Paginate
            eventsPerPage={eventsPerPage}
            allEvents={actualUnImportantEvents.length}
            paginate={paginate}
          />
        </div>
      </div>
      <div className={s.fot}>
        <Footer />
      </div>
    </div>
  );
}
