/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getEvents from "../../actions/getEvents";
import Paginate from "../Paginate/Paginate";
import {cartas} from "../../cartas"
import SearchBar from "../SearchBar/SearchBar";
import s from "./home.module.css";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import CarouselComp from "../Carousel/Carousel";
import bulkEvents from "../../actions/bulkEvents"
// import { setPage } from "../../actions";

export default function Home() {
  const dispatch = useDispatch();
  const allEvents = useSelector((state) => state.eventsLoaded);
  // const { page } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);

  const lastEvent = currentPage * eventsPerPage;
  const firstEvent = lastEvent - eventsPerPage;
  const currentEvents = allEvents.slice(firstEvent, lastEvent);
  const unImportantEvents = Array.isArray(currentEvents)? currentEvents.filter((el) => el.isImportant === false): console.log('Aun no hay eventos en el carrousel', currentEvents);
  
  // const currentUnimportant = currentEvents?.filter(
  //   (e) => e.isImportant === false
  // );
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getEvents(""));
    dispatch(bulkEvents(cartas))
    
  }, [dispatch]);

  // const changePage = (page) => {
  //   dispatch(getEvents({ title, page }));
  //   dispatch(setPage(page));
  // };

  return (
    <div className={`${s.container}`}>
      <div className={`${s.searchBar}`}>
        <SearchBar />
      </div>
      <div className={s.contCarousel}><CarouselComp /></div>

      <div className={s.card}>
        <Events events={unImportantEvents} />

        {/* <div className={s.btnPaginate}>
          <button disabled={page - 1 === 0} onClick={() => changePage(page -1)}>
            Prev
          </button>
          <div className={s.numPAge}>{page}</div>
          <button
            disabled={allEvents.length < 2}
            // onClick={() => changePage(page + 1)}
          >
            Next
          </button>
        </div> */}
      </div>
      <div>
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
