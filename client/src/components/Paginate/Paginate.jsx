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
        {pageNumbers?.map((number) => {
          return (
            <div key={number} className={`${s.number}`}>
              <a href="paginado" onClick={() => paginate(number)}>
                {number}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
