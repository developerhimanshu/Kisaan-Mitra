import React, { useEffect, useRef } from 'react';

const Chatbox = ({chats}) => {
    const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chats]);

  return (
    <div className="w-full bg-[#dce5db] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23065b12\' fill-opacity=\'0.31\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] h-[90vh] transition-all duration-500">
      <div className='bg-white py-3 sticky shadow-md z-10'>
      <h1 className='text-green-900 text-5xl uppercase font-bold text-center w-full'>Your AI assistant</h1>
      </div>
      <div className='bg-transparent relative w-full'>
        {chats.length === 0 ? (
          <div className='absolute top-[250px] left-[40%] text-lg'>Ask questions to start conversation...</div>
        ) : (
          <div className='overflow-y-auto h-[82vh] px-4 py-2 flex flex-col'>
            {chats.map((chat, index) => (
              <div key={index} className='w-full mb-4'>
                <div className='flex justify-start'>
                  <div className='bg-blue-500 text-white p-2 rounded-lg max-w-xl shadow-md'>
                    <p>{chat.user}</p>
                  </div>
                </div>
                <div className='flex justify-end mt-2'>
                  <div className='bg-green-900 text-white p-2 rounded-lg max-w-xl shadow-md'  dangerouslySetInnerHTML={{ __html: chat.ai }}>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbox;
