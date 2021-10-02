import React from "react";
import { Link } from "react-router-dom";
import styles from './footer.module.css';


export default function Footer(){
    return (
        <div className={styles.footer}>
            
            <Link to='/wishList'>
                <div>Favoritos</div>
            </Link>
            <Link to='/contact'>
                <div>Soporte</div>
            </Link>
            <Link to='/addEvent'>
                <div>Vende con nosotros!</div>
            </Link>
            <Link to='/respuestas'>
                <div>Preguntas Frecuentes</div>
            </Link>
            <Link to='/privacidad'>
                <div>Politicas de privacidad</div>
            </Link>
            </div>
    )
}