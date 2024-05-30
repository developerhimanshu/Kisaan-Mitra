import React, { useState } from 'react'
import run from '../config/gemini';
import Chatbox from './Chatbox';
import ChatInput from './ChatInput';

const AiChat = () => {
    const [text, setText] = useState("");
    const [res, setRes] = useState("");
    const [chats, setChats] = useState([]);
 return (
    <div className='w-[80vw] h-full flex flex-col items-center'>
        <Chatbox chats= {chats}/>
        <ChatInput setText={setText} text={text} setRes={setRes} chats={chats} setChats={setChats}/>
    </div>
  )
}

export default AiChat