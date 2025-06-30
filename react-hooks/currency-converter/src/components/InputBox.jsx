import React, { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "USD",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {

    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block text-start w-full">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full py-1.5 border rounded-lg px-2"
                    type="number"
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right ms-4">
                <p className="text-black/40 mb-2 w-full text-start">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray cursor-pointer outline-none border w-full"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option
                            key={currency}
                            value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox