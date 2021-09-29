import React from "react";
import { Link } from "react-router-dom";
import styles from './footer.module.css';

export default function Footer(){
    return (
        <div className={styles.footer}>
            <Link to='/contact'>Contactanos</Link>
            <Link to='/respuestas'>Preguntas Frecuentes</Link>
            <Link to='/addEvent'>Vende con nosotros!</Link>
        </div>
    )
}