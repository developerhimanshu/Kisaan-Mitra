import React from 'react'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Predict from './components/Predict';
import AiChat from './components/AiChat';
const App = () => {
  return (
    <BrowserRouter>
      <div className='flex'>
        <Sidebar/>
        <div>
          <Routes>
              <Route path = '/' element={<Home/>}/>
              <Route path = '/predict' element={<Predict/>}/>
              <Route path = '/aiChat' element={<AiChat/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;