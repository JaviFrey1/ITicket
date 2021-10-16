import React from 'react'

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
        'Somos una empresa dedicada a la venta de entradas para eventos de Musica, Teatro y otros'
      )
      this.addMessageToState(message)
    }
  
    saludar = () => {
      const message = this.createChatBotMessage(
        'Mucho gusto 😄! En que le puedo ayudar?',
      )
      this.addMessageToState(message)
    }
  
    ayudaPublicarNecesidad = () => {
      const message = this.createChatBotMessage(
       'Para adquirir una entrada, primero debe iniciar sesion y entrar a los detalles del evento que ud elija',
      )
      this.addMessageToState(message)
    }
  
  
    registro = () => {
      const message = this.createChatBotMessage(
        'Para registrarte encontraras un boton arriba a la derecha donde podras ingresar con tu cuenta de Google o crearte una cuenta de usuario en nuestra pagina',
      )
      this.addMessageToState(message)
    }
  
    palabrasGracias = () => {
      const message = this.createChatBotMessage(
        'Gracias a vos 😊',
      )
      this.addMessageToState(message)
    }
  
    palabrasGracias2 = () => {
      const message = this.createChatBotMessage(
        'Gracias, 😊 que tengas un excelente dia',
      )
      this.addMessageToState(message)
    }
  
    palabrasInsultos = () => {
      const message = this.createChatBotMessage(
        'Por favor, cuide su vocabulario 🤬🚫',
      )
      this.addMessageToState(message)
    }
  
    palabrasBroma = () => {
      const message = this.createChatBotMessage(
        'Hackeadisimo Perrito malvado, nos vemos en Narnia!😈',
      )
      this.addMessageToState(message)
    }
  
    plusHenry = () => {
      const message = this.createChatBotMessage(
        <a href='https://www.soyhenry.com/'>Si quieres conocer donde estudiaron mis creadores hace click aquí 💛!!</a>
      )
      this.addMessageToState(message)
    }
  
    ayudaOfrecer = () => {
      const message = this.createChatBotMessage(
        'Hace click en una opción',
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
        <a href='https://tukiteck.vercel.app/about'> Nosotros 🚀 </a>,
      )
      this.addMessageToState(message)
    }
  
    ayudaOfrecer3 = () => {
      const message = this.createChatBotMessage(
        <a href='https://www.soyhenry.com/'> Henry 💛</a>,
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