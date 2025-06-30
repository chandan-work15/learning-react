import React, { useState } from 'react'

const CurrencyConverter = () => {

    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [result, setResult] = useState();

    return (
        <div>
            <div className="">
                <div className="">
                    <label htmlFor="amount">
                        <h2>Amount</h2>
                    </label>
                </div>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    className='input'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className="" style={{ display: "flex", gap: "5px" }}>
                <div className="">
                    <div className="">
                        <label htmlFor="amount">
                            <h2>from</h2>
                        </label>
                    </div>
                    <select 
                    className='input' 
                    onChange={(e) => { setFrom(e.target.value) }}>
                        <option value="">select currency</option>
                        <option value="inr">INR</option>
                        <option value="usd">USD</option>
                    </select>
                </div>
                <div className="">
                    <div className="">
                        <label htmlFor="amount">
                            <h2>to</h2>
                        </label>
                    </div>
                    <select name="" id="" className='input' onChange={(e) => { setTo(e.target.value) }}>
                        <option value="">select currency</option>
                        <option value="usd">USD</option>
                        <option value="inr">INR</option>
                    </select>
                </div>
            </div>
            <h1>Result : {result}</h1>
        </div >
    )
}

export default CurrencyConverter