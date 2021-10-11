import React  from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import './contact.css'

const Result =() => {
    return(
        <p>Tu mensaje ha sido enviado satisfactoriamente. Te contactaremos pronto!</p>
    )
}
export default function Contact() {
    const [result, showresult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_egfpbsu', e.target, 'user_GdBu7T9DTHFnIo5cvAyNk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showresult(true)
      };
    return (
        <body>
        <div className="contactme" id="contact">
          <div className="contactOverlay">
            <div className="container">
              <div className="form">
        <form action="" onSubmit={sendEmail}>
        <div className="formWord">
          <h2>Vende con Tukiteck!</h2>
          <span>Nombre Completo</span>
          <br />
          <input class="input100" type="text" name="fullName" required />
          <br />
          <span>Numero de telefono</span>
          <br />
          <input class="input100" type="text" name="phone" required />
          <br />
          <span>Ingresa tu Email</span>
          <br />
          <input class="input100" type="text" name="email" required />
          <br />
        </div>
        <div className="formWord">
        <p className="parrafito">Hola como estas! un gusto tenerte por aqui. </p>
        <p>Este formulario fue creado para que puedas enviarnos tu informacion de contacto 
            en caso de estar interesado en vender con Tukiteck!</p>
            <p>Luego de que completes este formulario, nos pondremos en contacto contigo
                via Email para que puedas vender con nosotros!
            </p>

          <button>SUBMIT</button>
          <div class="row">{result ? <Result /> : null }</div>
        </div>
      </form>
      </div>
        </div>
      </div>
    </div>
  </body>
    )
}