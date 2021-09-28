import React from "react";
import { NavLink } from "react-router-dom";
import s from "./nav.module.css";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";

export default function Nav() {
  return (
    <div className={`${s.nav}`}>
      <div className={`${s.container}`}>
        <NavLink to="/home">
          <ImIcons.ImHome className={`${s.icon}`} />
        </NavLink>
        <div className={`${s.right}`}>
          <NavLink to="/wishList">
            <MdIcons.MdFavorite className={`${s.icon}`} />
          </NavLink>
          <NavLink to="/addEvent">
            <MdIcons.MdAddCircleOutline className={`${s.icon}`} />
          </NavLink>
         
        </div>
      </div>
    </div>
  );
}
