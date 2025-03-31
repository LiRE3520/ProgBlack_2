"use client";

import { useState } from "react";

export default function Home() { 
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 sm:text-5xl lg:text-6xl">This website could be ANYTHING</h1>
      <p className="text-lg text-gray-700 mb-4 sm:text-xl lg:text-2xl">
        {clicked ? "The button has been clicked!" : "This uses TailwindCSS, next.js and React."}
      </p>
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={handleClick}>
        You can click this
      </button>
    </div>
  );
}