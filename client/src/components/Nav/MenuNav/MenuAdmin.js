import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./menuUser.module.css";
import Swal from "sweetalert2";
import logout from "../../../actions/logout";
<<<<<<< HEAD

=======
>>>>>>> 5378b1ae353a8ee97ebd236a29ec0fa3cae33f9e

import {

  AiOutlineCloseCircle,
} from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
    
const MenuAdmin = () => {
  const dispatch = useDispatch();

  const [menuClass, setMenuClass] = useState(false);

  const showMenu = () => setMenuClass(!menuClass);
  return (
    <div>
      <FaRegUserCircle onClick={showMenu} style={{ color: "black" }} />

      <nav className={menuClass ? s.active : s.desactive}>



        <Link
          to='/panelAdmin'
          style={{ margin: "5px 0 0 0" }}
          className={s.itemMenu}
          onClick={(e) => {
            showMenu();
          }}
        >
          <RiAdminLine style={{ color: "black", marginRight: "5px" }} />{" "}
          <h4>Panel Admin</h4>
        </Link>
        <div
          to=""
          style={{ margin: "5px 0 0 0" }}
          className={s.itemMenu}
          onClick={(e) => {
            showMenu();
            Swal.fire({
              title: "Cerrar sesion?",
              text: "¿Estas Seguro/a?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Confirmar",
            }).then((result) => {
              if (result.isConfirmed) {
              dispatch(logout())
              }
            });
          }}
        >
          <AiOutlineCloseCircle
            style={{ color: "black", marginRight: "5px" }}
          />{" "}
          <h4 style={{ color: "black" }}>Cerrar sesion</h4>
        </div>
      </nav>
    </div>
  );
};

export default MenuAdmin;
