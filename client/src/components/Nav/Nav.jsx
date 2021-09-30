import React from 'react'
import { Link } from 'react-router-dom'
import style from './nav.module.css'
import logo from '../../images/pngLetraNegraRedimensionado.png'


export function Nav({ setInput, input }) {
  return (
    
    <div className={style.mainContainer}>
      
      <nav className={style.navContainer}>
      
        <div className={style.linkContainer}>
        <Link to="/home" className={style.Link}>
        <img  height="50" width="100" className={style.logo} src={logo} alt="" />
        </Link>
        <Link to="/wishList" className={style.hover}>
              Favoritos
            </Link>
            <div  className={style.space}></div>
            <Link to="/login" className={style.hover}>
              <div>Iniciar Sesion</div>
            </Link>
            <Link to="/register" className={style.hover}>
            <div > Registrate</div>
            </Link>
            </div> 
      </nav>
    </div>
  )
}

export default Nav