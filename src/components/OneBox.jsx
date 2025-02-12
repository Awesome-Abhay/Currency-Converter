import React from 'react'

function OneBox() {
    return (
        <div className='one-box rounded-xl w-full border-2 bg-white p-5 flex flex-col gap-5'>
            <div className='flex w-full'>
                <div className='w-1/2'>From</div>
                <div className='w-1/2 text-end'>Currency Type</div>
            </div>
            <div className='flex justify-between'>
                <input
                    type="number"
                    defaultValue={0}
                    className='w-1/2 outline-none' />
                <select className='outline-none w-1/5 bg-slate-100'>
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