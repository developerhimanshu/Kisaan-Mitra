import React from 'react';
import { Link } from 'react-router-dom';
import { BiPhotoAlbum, BiChat } from 'react-icons/bi';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <header className="bg-green-600 text-white py-6 pl-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Kisaan Mitra</h1>
          <nav>
            <Link to="/" className="text-lg mx-4">Home</Link>
            <Link to="/predict" className="text-lg mx-4">Plant Disease Detection</Link>
            <Link to="/aiChat" className="text-lg mx-4">AI Chat</Link>
          </nav>
        </div>
      </header>

      
      <main className="container mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to Kishan Mitra</h2>
          <p className="text-lg text-gray-600 mt-4">
            Your personal assistant for smarter farming. Explore our features to make your farming more efficient and productive.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
         
          <Link to="/predict" className="w-full md:w-5/12 lg:w-1/4 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl duration-300 transition-shadow">
            <div className="p-6 text-center">
              <BiPhotoAlbum size={50} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Plant Disease Detection</h3>
              <p className="text-gray-600">
                Use advanced AI to detect diseases in your plants and take appropriate action to save your crops.
              </p>
            </div>
          </Link>

      
          <Link to="/aiChat" className="w-full md:w-5/12 lg:w-1/4 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl duration-300 transition-shadow">
            <div className="p-6 text-center">
              <BiChat size={50} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">AI Chat</h3>
              <p className="text-gray-600">
                Chat with our AI assistant to get instant answers to your farming questions and advice.
              </p>
            </div>
          </Link>
          
        </div>
      </main>

      
      <footer className="bg-green-600 text-white py-4 w-[81vw] absolute bottom-0">
        <div className="container mx-auto text-center ">
          <p>&copy; 2024 Kisaan Mitra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
