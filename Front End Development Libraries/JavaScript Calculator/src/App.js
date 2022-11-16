import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [display, setDisplay] = useState(0);
  const [output, setOutput] = useState(null);
  const [result, setResult] = useState(null);

  const decimalBtn = document.getElementById("decimal");

  const changeColorTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const handleClick = event => {
    let stringValue = event.target.value;
    let numberValue = parseInt(stringValue);

    if(!isNaN(numberValue)) {

      setOutput(prevOutput => {
        if(prevOutput === null || prevOutput === "NaN" || prevOutput === "0") {
          return stringValue;
        } else {
          return prevOutput + stringValue;
        }
      })

      setDisplay(prevDisplay => {
        if(prevDisplay === 0) {
          return stringValue;
        } else if(prevDisplay === "0") {
          return 0;
        } else {
          if(isNaN(display)) {
            return stringValue;
          } else {
            return prevDisplay + stringValue;
          }
        }
      })

    } else if(isNaN(numberValue) && stringValue === ".") {

      setOutput(prevOutput => {
        if(prevOutput === null) {
          return "0.";
        } else {
          if(isNaN(display)) {
            return `${prevOutput}0.`
          } else {
            return prevOutput + stringValue;
          }
        } 
      })

      setDisplay(prevDisplay => {
        if(prevDisplay === null) {
          return "0.";
        } else {
          if(isNaN(display)) {
            return `${prevDisplay}0.`
          } else {
            return prevDisplay + stringValue;
          }
        } 
      })

      decimalBtn.disabled = true;

    } else {
      if(result !== null) {
        setOutput(result)
      }

      if(isNaN(display)) {
        if(stringValue === "-") {
          if(isNaN(output[output.length - 1]) && output[output.length - 2] !== "-") {
            setDisplay(stringValue);
            setOutput(prevOutput => prevOutput + stringValue);
          } else {
            setDisplay(stringValue);
            if(isNaN(output[output.length - 1])) {
              setOutput(prevOutput => prevOutput.slice(0, (prevOutput.length - 1)) + stringValue);
            } else {
              setOutput(prevOutput => prevOutput + stringValue);
            }
          }
        } else {
          setDisplay(stringValue);
          if(isNaN(output[output.length - 2])) {
            setOutput(prevOutput => prevOutput.slice(0, (prevOutput.length - 2)) + stringValue)
          } else {
            setOutput(prevOutput => prevOutput.slice(0, (prevOutput.length - 1)) + stringValue)
          }
        }
      } else {
        setDisplay(stringValue);
        decimalBtn.disabled = false;
        setOutput(prevOutput => prevOutput + stringValue)
      }
    }
  }

  const calculate = () => {
    if(output === null) {
      setDisplay(NaN);
      setOutput("NaN");
    } else  {
      let regexNumber = /\d/;
      let isNumber = regexNumber.test(output[output.length - 1]);

      if(isNumber) {
        return getResult(output);
      } else {
        let newOutputStr = output.slice(0, (output.length - 2));
        return getResult(newOutputStr);
      }
    }
  }

  const getResult = arr => {

    if(arr.length === 1) {
      setResult(Number(arr[0]));
      setOutput(prevOutput => {
        return `${prevOutput}=${prevOutput}`;
      })
      return;
    } else {
      setResult(eval(arr))
      setOutput(prevOutput => `${prevOutput}=${eval(arr)}`)
      setDisplay(eval(arr))
    }
  }

  const clearAll = () => {
    setDisplay(0);
    setOutput(null);
    setResult(null);
    decimalBtn.disabled = false;
  }

  return (
    <div id="calculator-container" className={darkMode ? "" : "light"}>
      <div id="display-container">
        {darkMode && <i className="fa-regular fa-lightbulb" onClick={changeColorTheme}></i>}
        {!darkMode && <i className="fa-solid fa-lightbulb" onClick={changeColorTheme}></i>}
        <div id="output">{output}</div>
        <div id="display">{display}</div>
      </div>
      <div id="button-container">
        <button onClick={clearAll} value="AC" id="clear">AC</button>
        <button onClick={handleClick} value="/" id="divide">/</button>
        <button onClick={handleClick} value="*" id="multiply">X</button>
        <button onClick={handleClick} value="7" id="seven">7</button>
        <button onClick={handleClick} value="8" id="eight">8</button>
        <button onClick={handleClick} value="9" id="nine">9</button>
        <button onClick={handleClick} value="-" id="subtract">-</button>
        <button onClick={handleClick} value="4" id="four">4</button>
        <button onClick={handleClick} value="5" id="five">5</button>
        <button onClick={handleClick} value="6" id="six">6</button>
        <button onClick={handleClick} value="+" id="add">+</button>
        <button onClick={handleClick} value="1" id="one">1</button>
        <button onClick={handleClick} value="2" id="two">2</button>
        <button onClick={handleClick} value="3" id="three">3</button>
        <button onClick={handleClick} value="0" id="zero">0</button>
        <button onClick={handleClick} value="." id="decimal">.</button>
        <button onClick={calculate} value="=" id="equals">=</button>
      </div>
    </div>
  );
}

export default App;
