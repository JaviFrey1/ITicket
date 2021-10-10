import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css";
import logo from "../../images/pngLetraNegraRedimensionado.png";
import {
  BsBookmarkFill,
  BsFillPersonFill,
  BsFillPersonBadgeFill,
} from "react-icons/bs";
import Menuuser from "./MenuNav/MenuUser";
// import UserNavBar from "./UserNavBar";

export function Nav({ setInput, input }) {
  // SI ESTA AUTENFICADO
  let isAuth = false;

  return (
    <nav className={style.navContainer}>
      <div className={style.linkContainer}>
        <Link to="/home" className={style.Link}>
          <div className={style.contLogo}>
            <img
              height="50"
              width="100"
              className={style.logo}
              src={logo}
              alt=""
            />
          </div>
        </Link>

        {!isAuth ? (
          <div className={style.contBtn2}>
            <Link to="/wishList" className={style.hover}>
              <BsBookmarkFill />
            </Link>
            <Link to="/login" className={style.hover}>
              <div style={{ color: "black" }}>Iniciar Sesion</div>
            </Link>
            <Link to="/register" className={style.hover}>
              <div style={{ color: "black" }}> Registrate</div>
            </Link>
          </div>
        ) : (
          <div className={style.contBtn2}>
            <Link to="/wishList" className={style.hover}>
              <BsBookmarkFill />
            </Link>
            <div to="null" className={style.hover_2}>
              <Menuuser />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
