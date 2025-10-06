
import React, { useState, useEffect, useRef } from 'react';
import type { Message } from './types';
import { Sender } from './types';
import { getBotResponse } from './services/chatbotService';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome message from the bot
    setMessages([
      {
        id: Date.now(),
        text: "Hello! I'm a rule-based chatbot. You can ask me for the time, a joke, or just say hi. Type 'help' to see what I can do!",
        sender: Sender.BOT,
      },
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isBotTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: Sender.USER,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsBotTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponseText = getBotResponse(text);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: Sender.BOT,
      };
      setIsBotTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, 1200 + Math.random() * 500);
  };

  const BotTypingIndicator = () => (
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 min-h-screen flex flex-col items-center justify-center font-sans text-white p-4">
      <div className="w-full max-w-2xl h-[90vh] flex flex-col bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700">
        <header className="p-4 border-b border-slate-700 flex items-center space-x-3">
            <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
            </div>
          <div>
            <h1 className="text-xl font-bold text-gray-100">RuleBot Assistant</h1>
            <p className="text-sm text-green-400">Online</p>
          </div>
        </header>
        <main className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isBotTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-700 rounded-lg rounded-bl-none p-3 max-w-md">
                 <BotTypingIndicator />
              </div>
            </div>
           )}
          <div ref={messagesEndRef} />
        </main>
        <footer className="p-4 border-t border-slate-700">
          <ChatInput onSendMessage={handleSendMessage} />
        </footer>
      </div>
    </div>
  );
};

export default App;
