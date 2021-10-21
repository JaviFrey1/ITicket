import React from 'react'
import './main.css'
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage
      this.setState = setStateFunc
    }
  
    vacio = () => {
      const message = this.createChatBotMessage(
        'Primero debes escribir tu consulta',
      )
      this.addMessageToState(message)
    }
  
    hacerChangas = () => {
      const message = this.createChatBotMessage(
        'Somos una empresa dedicada a la venta de entradas para eventos de Musica, Teatro y mucho mas!'
      )
      this.addMessageToState(message)
    }
  
    saludar = () => {
      const message = this.createChatBotMessage(
        <span role="img" aria-label="grinning face with smiling eyes">Mucho gusto 😄! En que le puedo ayudar?</span>
      )
      this.addMessageToState(message)
    }
  
    ayudaPublicarNecesidad = () => {
      const message = this.createChatBotMessage(
       'Para adquirir una entrada, primero debe iniciar sesion y entrar a los detalles del evento que usted elija.',
      )
      this.addMessageToState(message)
    }
  
  
    registro = () => {
      const message = this.createChatBotMessage(
        'Para registrarte encontraras un boton arriba a la derecha donde podras ingresar con tu cuenta de Google o crearte una cuenta de usuario en nuestra pagina.',
      )
      this.addMessageToState(message)
    }
  
    palabrasGracias = () => {
      const message = this.createChatBotMessage(
        <span role="img" aria-label="smiling face">Gracias a vos 😊</span>
      )
      this.addMessageToState(message)
    }
  
    palabrasGracias2 = () => {
      const message = this.createChatBotMessage(
        <span role="img" aria-label="smiling face">Gracias, 😊 que tengas un excelente dia.</span>
      )
      this.addMessageToState(message)
    }
  
    palabrasInsultos = () => {
      const message = this.createChatBotMessage(
        <span role="img" aria-label="face with symbols in mouth">Por favor, cuide su vocabulario 🤬🚫</span>
      )
      this.addMessageToState(message)
    }
  
    palabrasBroma = () => {
      const message = this.createChatBotMessage(
        <span role="img" aria-label="smmiling face with horns">Hackeadisimo Perrito malvado, nos vemos en Narnia!😈</span>
      )
      this.addMessageToState(message)
    }
  
    plusHenry = () => {
      const message = this.createChatBotMessage(
        <a href='https://www.soyhenry.com/' style={{color:"black"}}>Si quieres conocer donde estudiaron mis creadores hace click aquí !!</a>
      )
      this.addMessageToState(message)
    }
  
    ayudaOfrecer = () => {
      const message = this.createChatBotMessage(
        'Si tienes problemas con alguna compra de tickets, o al iniciar sesion, ve hasta abajo en la pagina. Luego da click en "Soporte" y llena los datos. \n Nos estaremos comunicando a la brevedad.',
      )
      this.addMessageToState(message)
    }
  
    // ayudaOfrecer1 = () => {
    //   const message = this.createChatBotMessage(
    //     <a href='https://tukiteck.vercel.app/faq'> FAQ 🛠</a>,
    //   )
    //   this.addMessageToState(message)
    // }
  
    ayudaOfrecer2 = () => {
      const message = this.createChatBotMessage(
         <a href='https://tukitukiteck.vercel.app/about'><span role="img" aria-label="rocket"> Nosotros 🚀</span> </a>
      )
      this.addMessageToState(message)
    }
  
    ayudaOfrecer3 = () => {
      const message = this.createChatBotMessage(
        <a href='https://www.soyhenry.com/'><span role="img" aria-label="yellow hearth">Henry 💛</span></a>,
      )
      this.addMessageToState(message)
    }
  
    promocionar = () => {
      const message = this.createChatBotMessage(
        "Para poder vender con nosotros debes registrarte como usuario y completar los datos del formulario que se encuentra en la seccion 'Vende con Nosotros' " 
      )
      this.addMessageToState(message)
    }
  
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }))
    }
  }
  
  export default ActionProvider