/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getEvents from "../../actions/getEvents";
import getCategories from "../../actions/getCategories";
import getSubCategories from "../../actions/getSubCategories";
import { filterEvent } from "../../actions/filterEvent";
import { setOrder } from "../../actions";

import Card from "../Event/Event";
import Paginate from "../paginate/Paginate.jsx";
import SearchBar from "../SearchBar/SearchBar";
import s from "./home.module.css";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import CarouselComp from "../Carousel/Carousel";

export default function Home() {
  const dispatch = useDispatch();
  const allEvents = useSelector((state) => state.eventsLoaded);
  const categorias = useSelector((state) => state.categories);

  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(9);

  const lastEvent = currentPage * eventsPerPage;
  const firstEvent = lastEvent - eventsPerPage;
  const currentEvents = allEvents.slice(firstEvent, lastEvent);
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getEvents(""));
  }, [dispatch]);

  const handleSelect = (e)=> { //Javi
    console.log('change',e.target.value)
    dispatch(setOrder(e.target.value));
    dispatch(filterEvent({order: e.target.value}))
  }

  return (
    <div className={`${s.container}`}>
      <div className={`${s.searchBar}`}>
        <SearchBar />
      </div>
      <div className={s.contCarousel}>
        <CarouselComp />
      </div>
      <div class={s.card}>
        <select onChange={handleSelect}> {/*ESTO LO HIZO JAVI*/}
          <option value=''>Categories</option>
          <option value='Blues'>Blues</option>
        </select>
        <Events />

        <Paginate
          eventsPerPage={eventsPerPage}
          allEvents={allEvents.length}
          paginate={paginate}
        />
      </div>
      <div className={s.fot}>
        <Footer />
      </div>
    </div>
  );
}
