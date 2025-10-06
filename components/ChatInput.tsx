
import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 w-full bg-slate-700 text-gray-200 placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-200"
        autoComplete="off"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white rounded-full p-3 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-110 disabled:opacity-50 disabled:scale-100"
        disabled={!text.trim()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </form>
  );
};

export default ChatInput;
