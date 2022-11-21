import React, {useState} from "react";
import buttonData from "./buttonData";
import Button from "./components/Button";

function App() {
  const [displayText, setDisplayText] = useState("...");

  const buttonElements = buttonData.map(button => {
    const {text, keyCode, id, displayText, src} = button;

    return (
      <Button
        key={keyCode}
        setDisplayText={setDisplayText}
        text={text}
        keyCode={keyCode}
        id={id}
        displayText={displayText}
        src={src}
      />
    )
  })

  return (
    <div id="drum-machine">
      <h1>Drum Machine <i className="fa-solid fa-drum"></i></h1>
      <div id="display">{displayText}</div>
      <div className="volume-container">
        <p>Volume</p>
        <input type="range" />
      </div>
      <div className="drum-pads-container">
        {buttonElements}
      </div>
    </div>
  );
}

export default App;