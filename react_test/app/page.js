export default function Home() { 
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">This website could be ANYTHING</h1>
      <p className="text-lg text-gray-700 mb-4">This uses TailwindCSS, next.js and React.</p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        You can click this
      </button>
    </div>
  );
}