import React, { useState, useEffect } from "react";
import s from "./menuUser.module.css";
import Swal from "sweetalert2";
import { useDispatch,useSelector } from "react-redux";
import userData from "../../../actions/userData";
import logout from "../../../actions/logout";
import logoutGoogle from "../../../actions/logoutGoogle";

import {

  AiOutlineSetting,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

import { FaRegUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

const Menuuser = () => {
  const dispatch = useDispatch();

  const activeUser = useSelector((state) => state.activeUser)
  const [menuClass, setMenuClass] = useState(false);

  const showMenu = () => setMenuClass(!menuClass);



  useEffect(() => {
    dispatch(userData())  
    
  }, []);



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

        <Link to={`/users/${activeUser.id}`}
          style={{ margin: "5px 0 0 0" }}
          className={s.itemMenu}
          onClick={(e) => {
            showMenu();
          }}
        >
          <AiOutlineSetting style={{ color: "black", marginRight: "5px" }} />{" "}
          <h4>Mis Datos</h4>
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
                
                if(!activeUser.googleId) dispatch(logout())
                else dispatch(logoutGoogle())
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

export default Menuuser;
