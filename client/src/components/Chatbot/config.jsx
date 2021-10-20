import { createChatBotMessage } from 'react-chatbot-kit';
// import ChatbotMessageAvatar from '../../../node_modules/react-chatbot-kit/src/components/ChatbotMessage/ChatBotMessageAvatar/ChatbotMessageAvatar.tsx'
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