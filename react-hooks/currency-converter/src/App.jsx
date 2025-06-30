import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import useCurrencyOptions from './hooks/useCurrencyOptions';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from, to);
  const currencyOptions = useCurrencyOptions();

  const options = Object.keys(currencyOptions);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    const rate = currencyInfo?.rates[to];
    
    if (rate) {
      setConvertedAmount((amount * rate));
    }
  }

  console.log(amount);



  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-blue-200">
        <div className="w-full">
          <h1 className="text-blue-500 text-3xl font-bold mb-3">Currency Converter</h1>
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-2xl p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-2">
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(value) => setAmount(value)}
                />
              </div>
              <div className="realtive w-full h-10 flex justify-center align-center">
                <button
                  type='button'
                  className="border-2 border-white w-full rounded-md bg-blue-600 text-white px-5 py-0.5"
                  onClick={swap}
                >Swap</button>
              </div>
              <div className="w-full mt-2">
                <InputBox
                  label="to"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-3">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
