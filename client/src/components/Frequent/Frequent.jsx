import React from "react";
import styles from './frequent.module.css'

export default function Frequent() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div>
                    <h3 className={styles.title}>1. Registrate</h3>
                    <p className={styles.text}>Para comprar tickets tenés que registrarte. Hacé clic acá, completá tus datos, activá tu cuenta desde tu correo ¡y listo! </p>
                </div>
                <div>
                    <h3 className={styles.title}>2. Buscá tu evento</h3>
                    <p className={styles.text}>Buscá el nombre el evento que te interesa en el buscador de la página y hacé clic en el botón verde “comprar” </p>
                </div>
                <div>
                    <h3 className={styles.title}>3. Finalizá la compra</h3>
                    <p className={styles.text}> Seguí los pasos del proceso de compra hasta llegar al menú de la pasarela de pagos.<br />
                        Elegí el método de pago (débito, crédito, o efectivo), pagá tu ticket, ¡y listo!<br />
                        Importante: si compraste tu ticket en efectivo, recordá que tu compra figurará pendiente durante 24 hs,<br />
                        luego de ese tiempo el ticket para el evento te llegará por mail y se cargará en tu perfil de tukiteck.com. </p>
                </div>
                <div>
                    <h3 className={styles.title}>4. Asisti a tu evento</h3>
                    <p className={styles.text}>Para ingresar a cualquiera de los eventos no te olvides de llevar tu DNI, y tu entrada.<br />
                        Ya sea impresa, o la que te enviamos por email 😉.</p>
                </div>
                <div>
                    <h3 className={styles.title}>5. ¿Puedo comprar con todos los métodos de pago? </h3>
                    <p className={styles.text}>Podes comprar con todas las tarjetas que soporta la plataforma de MercadoPago!</p>
                </div>
            </div>
        </div>
    )
}