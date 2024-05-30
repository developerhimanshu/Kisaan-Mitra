import React, { useState } from 'react'
import run from '../config/gemini';
import { BiSolidSend} from 'react-icons/bi'
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import DotsLoader from './Loader2';

const ChatInput = ({text, setText, setRes, chats, setChats}) => {
  const [loading, setLoading] = useState(false);
  const handleChange = (e)=>{
      setText(e.target.value);
  }

  const handleClick = async()=>{  
      if (text.trim() === '') return;
      setLoading(true);
      const response = await run(text);
      setRes(response);
      const sanitizedResponse = DOMPurify.sanitize(response);
      const htmlRes = marked(sanitizedResponse)
      setChats([...chats, {user: text, ai: htmlRes}]);
      setLoading(false);
      setText('');
  }

  const keyDownHandler = async(e) =>{
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <div className='flex items-center h-[10vh] bg-black w-full justify-center z-10'>
           {loading?<DotsLoader/>:<>
           <div className='bg-gray-300 rounded-full px-4 py-2 flex items-center'>
          <input type = "text" placeholder="Enter text to search" onChange={handleChange} onKeyDown={keyDownHandler} className='bg-transparent border-none outline-none w-[30vw]' value={text}/>
          <button onClick = {handleClick} >
            <BiSolidSend className='text-gray-900 text-2xl' />  
          </button>
         </div>
          </>}
        
    </div>
  )
}

export default ChatInput