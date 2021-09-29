import React from "react";
import { NavLink } from "react-router-dom";
import s from "./nav.module.css";
import logo from '../../images/pngLetraBlanca.png'

export default function Nav() {
  return (
    <div className={s.nav}>
      <div className={s.container}>
        <NavLink to="/home" className={s.hola}>
          <img className={s.logo} src={logo} alt='tukiteckLogo'/>
        </NavLink>

          <div className={s.right}>
            <NavLink to="/wishList">
              FAVS
            </NavLink>
            <NavLink to="/addEvent">
              <div>Vende con nosotros!</div>
            </NavLink>
            <NavLink to="/login">
              <div>Iniciar Sesion</div>
            </NavLink>
            <NavLink to="/register">
              <div>Registrate</div>
            </NavLink>
          </div>

      </div>
    </div>
  );
}
