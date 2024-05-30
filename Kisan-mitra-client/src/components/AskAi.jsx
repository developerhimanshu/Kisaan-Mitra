import React from 'react'
import {FaCut, FaTimes} from 'react-icons/fa'

const AskAi = ({htmlRes, setAsk}) => {
  return (
    <div className='bg-zinc-700 my-6 mx-7 text-white rounded-xl px-6  h-[80vh] relative z-40 overflow-y-auto'>
      <div className="flex justify-between bg-zinc-700 sticky top-0 py-2">
        <div className="text-3xl font-bold">Ask Ai</div>
        <FaTimes size={25} className='m-2 cursor-pointer ' onClick = {()=>{
            setAsk(false)
        }}/>
      </div>
        <div  dangerouslySetInnerHTML={{ __html: htmlRes }}></div>
    </div>
  )
}

export default AskAi