import React, {useEffect} from "react";

function Button({setDisplayText, text, keyCode, id, displayText, src}) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  function handleClick(element) {
    setDisplayText(displayText);
    document.getElementById(text).play();
  }

  function handleKeyDown(event) {
    if(event.keyCode === keyCode){
      handleClick();
    }
  }

  return (
    <div>
      <button onClick={handleClick} className="drum-pad" id={id}>
        {text}
        <audio src={src} className="clip" id={text}>Your browser does not support the audio element.</audio>
      </button>
    </div>
  );
}

export default Button;
