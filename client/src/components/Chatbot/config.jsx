import { createChatBotMessage } from 'react-chatbot-kit'
import React from 'react';
const config = {
  botName: 'Tukiteck',
  
  customComponents: {
    header: () => (
      <div
        style={{ color: 'white', backgroundColor: 'blue', padding: '5px', borderRadius: '3px' }}
      >
        Chat de ayuda
      </div>
    ),
  },
  
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "red",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "yellow",
    },
  },

  initialMessages: [
    createChatBotMessage(
      'Hola! Soy Tuki, en que le puedo ayudar?',
    ),
  ],
}

export default config