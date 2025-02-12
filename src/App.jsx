import { useState } from 'react'
import './App.css'
import OneBox from './components/OneBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="heading p-5 text-white text-4xl text-center mt-20">Currency Converter</h1>
      <div className="main max-w-md rounded-xl shadow-sm shadow-white p-5 border-2 border-white mx-auto mt-10 flex flex-col gap-4 relative">
        
      <OneBox />
      <OneBox />

      <button className="swap w-15 bg-blue-700 text-white text-xl flex justify-center items-center h-10 shadow-sm rounded-sm absolute top-43/100 left-40/100 border-1 border-white cursor-pointer">swap</button>



        
      </div>
    </>
  )
}

export default App
