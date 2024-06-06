import React, { useState } from 'react';
import '../styles/Chat.css';
import { useNavigate } from 'react-router-dom';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  let back = useNavigate()
  function backPage() {
    back('/')
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={handleMessageSend}>Enviar</button>
        <button onClick={backPage}>Voltar</button>
      </div>
    </div>
  );
}

export default Chat;
