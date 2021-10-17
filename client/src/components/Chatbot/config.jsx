import { createChatBotMessage } from 'react-chatbot-kit'
import React from 'react';
import './main.css'
const config = {
  botName: 'Tukiteck',
  
  customComponents: {
    header: () => (
      <div className="header">
        Chat de ayuda
      </div>
    ),
  },
  

  initialMessages: [
    createChatBotMessage(
      'Hola! Soy Tuki, en que le puedo ayudar?',
    ),
  ],
}

export default config