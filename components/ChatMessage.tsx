
import React from 'react';
import type { Message } from '../types';
import { Sender } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === Sender.USER;

  const userStyles = 'bg-indigo-600 self-end rounded-bl-3xl';
  const botStyles = 'bg-slate-700 self-start rounded-br-3xl';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}>
        <div
            className={`
                flex items-center space-x-3 max-w-md p-4 rounded-3xl text-white shadow-md
                ${isUser ? userStyles : botStyles}
            `}
        >
            <p className="text-base">{message.text}</p>
        </div>
    </div>
  );
};

export default ChatMessage;
