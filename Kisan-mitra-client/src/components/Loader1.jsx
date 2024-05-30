import React from 'react'


const Loader1 = ({htmlRes, setAsk}) => {
  return (
    <div className='bg-zinc-700 my-6 mx-7 text-white rounded-xl px-6 py-4 h-[80vh] relative z-40 overflow-y-auto flex justify-center items-center'>
         <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-white"></div>
        <div  dangerouslySetInnerHTML={{ __html: htmlRes }}></div>
    </div>
  )
}

export default Loader1