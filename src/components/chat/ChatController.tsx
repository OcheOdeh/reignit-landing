'use client';

import React, { useState } from 'react';
import ChatWidget from './ChatWidget';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const ChatController: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-5 right-5 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-colors z-50"
          aria-label="Open chat"
        >
          <ChatBubbleLeftRightIcon className="h-8 w-8" />
        </button>
      )}
      {isChatOpen && <ChatWidget onClose={toggleChat} />}
    </>
  );
};

export default ChatController;
