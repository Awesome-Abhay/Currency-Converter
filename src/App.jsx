import { use, useState } from 'react'
import './App.css'
import OneBox from './components/OneBox';


function App() {

  let [amount, setAmount] = useState(0);
  let [from, setFrom]= useState("USD");
  let [to, setTo]= useState("INR");
  let [convertedAmount, setConvertedAmount]= useState(0);


  let swap= ()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  return (
    <>
      <h1 className="heading p-5 text-white text-4xl text-center mt-20">Currency Converter</h1>
      <div className="main max-w-md rounded-xl shadow-sm shadow-white p-5 border-2 border-white mx-auto mt-10 flex flex-col gap-4 relative">

        <OneBox
          label={from}
          amountDisable={false}
          amount={amount}
          onAmountChange={(amount)=> setAmount(amount)}
          selectCurrency={from}
          currencyDisable={false}

        />
        
        <OneBox 
          label={to}
          amountDisable={true}
          selectCurrency={to}
          currencyDisable={true}
          amount={convertedAmount}
          
        />

        <button 
          className="swap w-15 bg-blue-700 text-white text-xl flex justify-center items-center h-10 shadow-sm rounded-sm absolute top-35/100 left-40/100 border-1 border-white cursor-pointer"
          onClick={swap}
          >swap</button>

        <button className="convert w-full bg-blue-500 text-white rounded-xl p-2 flex justify-center items-center text-2xl cursor-pointer">Convert From {from} To {to}</button>

      </div>
    </>
  )
}

export default App
