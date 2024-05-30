import axios from 'axios';
import React, { useState } from 'react';
import {IoSparkles} from 'react-icons/io5'
import defaultImage from '../assets/image.png';
import run from '../config/gemini'
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import AskAi from './AskAi';
import Loader1 from './Loader1';

const Predict = () => {
    const [image, setImage] = useState(null);
    const [res, setRes] = useState(null);
    const [file, setFile] = useState(null);
    const [ask, setAsk] = useState(false);
    const [ht, setHt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const onImageChange = (e) => {
        setRes(null)
        setFile(null)
        setImage(null)
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
            setFile(e.target.files[0]);
        }
    }

    const handleAskAi = async()=>{
        setIsLoading(true);
        const prompt = `explain what is ${res?.class} and provide the possible solution for this. How can a farmer yeild better crop`
        const response = await run(prompt);
        const sanitizedResponse = DOMPurify.sanitize(response);
        const htmlRes = marked(sanitizedResponse)
        setHt(htmlRes)
        setIsLoading(false);
        setAsk(true)
    }

    const handleClick = () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
    
            axios.post("http://localhost:8000/predict", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                setRes(response.data); 
                console.log(response.data);
            }).catch(error => {
                console.error('Error:', error);
            });
        }
    }

    return (
        <div className='w-[80vw] h-[100vh] flex flex-col  bg-gray-300'>
            {isLoading?<Loader1/>:<>
            <div className='bg-white py-3 sticky shadow-md z-10'>
                <h1 className='text-green-900 text-5xl uppercase font-bold text-center w-full'>Plant Disease Detection</h1>
            </div>
            {ask?<AskAi
                htmlRes={ht}
                setAsk={setAsk}
            />:<>
            <div className='flex flex-col bg-gray-300 my-6 px-4 py-2 items-center gap-5  justify-center'>
                <input type="file" onChange={onImageChange} />
                <img src={image || defaultImage} alt="Uploaded or default" className='max-w-[300px] h-auto' />
                <button onClick={handleClick} className='px-4 py-2 bg-green-900 rounded-lg hover:bg-green-800 transition-all duration-300 text-white font-semibold text-lg'>Predict</button>
            </div>
        <div className="bg-black transition-all duration-300 py-4 absolute bottom-0 w-[80vw]">
            {res?
            <div className='flex justify-around'>
            <div>
                <h1 className='text-green-600 text-xl font-bold text-center'>Plant Condition/disease: {res?.class}</h1>
                <p className='text-green-600 font-thin text-xs'>{( res?.confidence*100 ).toFixed(3)+"% chance"}</p>
            </div>
            <div className="px-4 py-1 pt-[10px] bg-green-700 hover:bg-green-600 font-semibold rounded-lg transition-all duration-300 cursor-pointer" onClick={handleAskAi}>
              <span className="flex gap-1 items-center">  Ask AI <IoSparkles size={15}/></span>
             </div>
            </div>
            :<></>}
         </div>
            </>
        }

            
            </>}
          
    </div>
    )
}

export default Predict;
