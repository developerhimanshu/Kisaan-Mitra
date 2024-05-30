import React from 'react';
import './DotsLoader.css'; // We'll create this CSS file next

const DotsLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="dots-loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default DotsLoader;