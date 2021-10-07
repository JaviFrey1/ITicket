import React from "react";
import s from "./paginate.module.css";

export default function Paginate({ eventsPerPage, allEvents, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div className={`${s.paginate}`}>
        {pageNumbers.length > 0? pageNumbers.map((number) => {
          return (
            <div key={number} className={`${s.number}`} onClick={() => paginate(number)}>
              <div>{number}</div>
            </div>
          );
        }): null}
      </div>
    </nav>
  );
}