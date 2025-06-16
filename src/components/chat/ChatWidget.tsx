'use client';

import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useChat } from 'ai/react';

interface ChatWidgetProps {
  onClose: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onClose }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="fixed bottom-24 right-5 w-96 h-[60vh] bg-white rounded-lg shadow-xl flex flex-col z-50">
      <div className="p-4 bg-gray-800 text-white rounded-t-lg flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative mr-3">
            <Image 
              src="/images/avatars/rosemary.png" 
              alt="Rosemary Avatar" 
              width={40} 
              height={40} 
              className="rounded-full" 
            />
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-white ring-1 ring-gray-800"></span>
          </div>
          <h3 className="font-bold text-lg">Rosemary</h3>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-300">
          &times;
        </button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {messages.length > 0 ? (
          messages.map(m => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 text-black'}`}>
                <div className="prose prose-sm max-w-none text-sm text-inherit">
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">Welcome! Ask me anything about Reignit Inc.</div>
        )}
      </div>
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            placeholder="Ask about our services, values, or anything else..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;
