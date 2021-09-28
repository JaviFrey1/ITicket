/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getEvents from "../../actions/getEvents";
import getCategories from "../../actions/getCategories";
import getSubCategories from "../../actions/getSubCategories";


import Card from "../Card";
import Paginate from "../paginate";
import SearchBar from "../SearchBar";
import s from "./home.module.css";

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

 

  
  return (
    <div className={`${s.container}`}>
      <div className={`${s.searchBar}`}>
        <SearchBar />
      </div>
      <div className={`${s.cards}`}>
        {currentEvents ? (
          currentEvents.map((event) => {
            return (
              <div key={event.id}>
                <Card
                  event={event}
                />
              </div>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <Paginate
        eventsPerPage={eventsPerPage}
        allEvents={allEvents.length}
        paginate={paginate}
      />
    </div>
  );
}
