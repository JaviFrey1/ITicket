import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css";
import logo from "../../images/pngLetraNegraRedimensionado.png";
import { BsBookmarkFill } from "react-icons/bs";

export function Nav({ setInput, input }) {
  return (
 <nav className={style.navContainer}>
      <div className={style.linkContainer}>
        <div className={style.contLogo}>
          <Link to="/home" className={style.Link}>
            <img
              height="50"
              width="100"
              classname={style.logo}
              src={logo}
              alt=""
            />
          </Link>
        </div>

        {/*<div className={style.space}></div>*/}
        <div className={style.contBtn2}>
          <Link to="/wishList" className={style.hover}>
            <BsBookmarkFill />
          </Link>
          <Link to="/login" className={style.hover}>
            <div>Iniciar Sesion</div>
          </Link>
          <Link to="/register" className={style.hover}>
            <div> Registrate</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
