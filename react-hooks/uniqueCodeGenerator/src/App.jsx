import './App.css'
import { useCallback, useState, useEffect, useRef } from 'react';
import List from './components/list';
import CurrencyConverter from './components/CurrencyConverter';
// import customhook from './hooks/customhook';
function App() {

  const [length, setLength] = useState(5);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [string, setString] = useState("")
  const inputRef = useRef(null);
  // const chook = customhook();

  // Console.log(chook);

  const stringGenerator = useCallback(() => {
    let tempString = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZaBbCcdefghijklmnopqrstuvwxyz"
    if (isNumber) str += "0123456789"
    if (isChar) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      tempString += str.charAt(char)
    }

    setString(tempString)
  }, [length, isChar, isNumber, setString])

  useEffect(() => {
    stringGenerator();
  }, [length, isChar, isNumber, setString])

  const handleCopy = () => {
    const text = inputRef.current.value;
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className='main-container'>
      <div className="card w-50">
        <div className="">
          <input type="text"
            value={string}
            placeholder='random string'
            className="input"
            readOnly
            ref={inputRef}
          />
          <button onClick={handleCopy}>Copy</button>

          <div className="slidecontainer">
            <input type="range"
              min={5}
              max={20}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="">length</label>
            <input type="checkbox"
              defaultChecked={isNumber}
              value={isNumber}
              onChange={() => { setIsNumber((prev) => !prev) }}
              id="1"
              name=""
              className="input" />
            <label htmlFor="">Include Number</label>
            <input type="checkbox"
              defaultChecked={isChar}
              value={isChar}
              onChange={() => { setIsChar((prev) => !prev) }}
              id="char"
              name=""
              className="input" />
            <label htmlFor="">Include Special Character</label>
          </div>
        </div>
      </div>

      {/* <List /> */}

      <CurrencyConverter />
    </div>
  )
}

export default App
