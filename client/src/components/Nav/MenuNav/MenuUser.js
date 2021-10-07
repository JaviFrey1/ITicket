import React, { useState } from "react";
import s from "./menuUser.module.css";

import {
  AiOutlineClose,
  AiOutlineSetting,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { NavLink, Link } from "react-router-dom";

const Menuuser = () => {
  const [menuClass, setMenuClass] = useState(false);

  const showMenu = () => setMenuClass(!menuClass);
  return (
    <div>
      <FaRegUserCircle onClick={showMenu} style={{ color: "black" }} />

      <nav className={menuClass ? s.active : s.desactive}>
        <Link
          style={{ margin: "5px 0 0 0" }}
          to="/misTickets"
          className={s.itemMenu}
          onClick={(e) => {
            showMenu();
          }}
        >
          <FiShoppingBag style={{ color: "black", marginRight: "5px" }} />{" "}
          <h4>Tus Tickets</h4>
        </Link>

        <Link
          style={{ margin: "5px 0 0 0" }}
          className={s.itemMenu}
          onClick={(e) => {
            showMenu();
          }}
        >
          <AiOutlineSetting style={{ color: "black", marginRight: "5px" }} />{" "}
          <h4>Mis Datos</h4>
        </Link>
        <Link
          style={{ margin: "5px 0 0 0" }}
          className={s.itemMenu}
          onClick={(e) => {
            showMenu();
          }}
        >
          <RiAdminLine style={{ color: "black", marginRight: "5px" }} />{" "}
          <h4>Panel Admin</h4>
        </Link>
        <Link
          style={{ margin: "5px 0 0 0" }}
          className={s.itemMenu}
          onClick={(e) => {
            showMenu();
          }}
        >
          <AiOutlineCloseCircle
            style={{ color: "black", marginRight: "5px" }}
          />{" "}
          <h4 style={{ color: "black" }}>Cerrar sesion</h4>
        </Link>
      </nav>
    </div>
  );
};

export default Menuuser;
