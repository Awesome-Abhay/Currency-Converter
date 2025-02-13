// Whenever we use looping in jsx, we should always pass a key.
// if not then react will give an error or warning but will continue its work.
// a key is needed because react is confused whether it is creating the same element again and again.
// if you want to bring performance in react for looping the elements then you must pass a key in looping in jsx file.

import React,{useId} from 'react'

function OneBox({
    label,
    amountDisable,
    amount,
    onAmountChange,
    selectCurrency,
    currencyOptions,
    onCurrencyChange,
    onKeyPress,
}) {

    const handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            onKeyPress();
        }
    }

    const amountInputId= useId();

    return (
        <div className='one-box rounded-xl w-full border-2 bg-white p-5 flex flex-col gap-5'>
            <div className='flex w-full'>
                <label htmlFor={amountInputId} className='w-1/2 text-gray-500'>{label.toUpperCase()}</label>
                <div className='w-1/2 text-end text-gray-500'>Currency Type</div>
            </div>
            <div className='flex justify-between'>
                <input
                    id={amountInputId}
                    placeholder='Amount'
                    type="number"
                    value={amount}
                    className='w-1/2 outline-none'
                    disabled={amountDisable}
                    onChange={(e)=>  onAmountChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <select 
                    className='outline-none w-1/5 bg-slate-100'
                    value={selectCurrency}  
                    onChange={(e)=> onCurrencyChange(e.target.value)}
                >

                    {
                        currencyOptions.map((currency)=>
                            <option key={currency} value={currency.toUpperCase()}>{currency.toUpperCase()}</option>
                        )
                    }
                    
                </select>
            </div>
        </div>
    )
}

export default OneBox