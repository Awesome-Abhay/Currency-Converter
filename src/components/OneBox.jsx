import React,{useId} from 'react'

function OneBox({
    label,
    amountDisable,
    amount,
    onAmountChange,
    selectCurrency,
    currencyDisable,
}) {

    const amountInputId= useId();

    return (
        <div className='one-box rounded-xl w-full border-2 bg-white p-5 flex flex-col gap-5'>
            <div className='flex w-full'>
                <label htmlFor={amountInputId} className='w-1/2'>{label}</label>
                <div className='w-1/2 text-end'>Currency Type</div>
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
                />
                <select 
                    className='outline-none w-1/5 bg-slate-100'
                    value={selectCurrency}  
                    disabled={currencyDisable}  
                >
                    <option value="USD">US</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GB</option>
                    <option value="INR">INR</option>
                    <option value="JPY">JPY</option>
                    <option value="AUD">AUD</option>
                </select>
            </div>
        </div>
    )
}

export default OneBox