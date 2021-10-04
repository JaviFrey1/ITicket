/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Menu from "../Menu/Menu";
import style from "../Nav/nav.module.css";
import logo from "../../images/imgCortada.png";
import FilterDate from "../FilterDate/FilterDate";
import FilterAddress from "../FilterLocal/FilterAddress";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} style={{ color: "black" }} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <div className={style.contLogo2}>
                <Link to="/home" className={style.Link}>
                  <img
                    height="50"
                    width="100"
                    className={style.logo}
                    src={logo}
                    alt=""
                  />
                </Link>
              </div>
              <Link to="#" className="menu-bars">
                <AiOutlineClose
                  onClick={showSidebar}
                  style={{ color: "black", marginRight: "20px" }}
                />
              </Link>
            </li>
            <Menu />

            <FilterDate />
            <FilterAddress />

            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
