import React, {useState} from "react";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  function setTime(name, value, operatorValue) {
    if((value === 1 && operatorValue === -1) || (value === 60 && operatorValue === 1)) {
      return;
    } else {
      if (name === "break") {
        setBreakLength(prevBreakLength => prevBreakLength + (operatorValue));
      } else if (name === "session") {
        setSessionLength(prevSessionLength => prevSessionLength + (operatorValue));
      }
    }
  }

  let isSession = true;
  let hasPaused = true;
  let hasPausedBefore = false;

  function setPause() {
    hasPaused = !hasPaused;
    setTimer();
  }

  function setTimer() {
    
    if(!hasPaused) {
      if(hasPausedBefore) {
        startTimer();
      } else {
        if(isSession) {
          totalTime = sessionLength * 60;
          startTimer();
          isSession = false;
        } else {
          totalTime = breakLength * 60;
          startTimer()
          isSession = true;
        }
      }
    } else {
      hasPausedBefore = true;
    }
  } 


  let minutes;
  let seconds;
  let totalTime;
  let hasReseted = false;
  

  function startTimer() {
    const timerInterval = setInterval(() => {
      if(totalTime === 0) {
        clearInterval(timerInterval);
        hasPausedBefore = false;
        document.getElementById("beep").play();
        setTimer();
      } else {
          if(hasPaused || hasReseted) {
            clearInterval(timerInterval);
          } else {
            if(!isSession) {
            document.getElementById("timer-label").textContent = "Session";
            } else {
              document.getElementById("timer-label").textContent = "Break";
            }
            
            totalTime--;
            minutes = Math.floor(totalTime / 60);
            seconds = totalTime % 60;
            
            if(seconds < 10) {
              seconds = `0${seconds}`
            }
            
            if (minutes < 10) {
              minutes = `0${minutes}`
            }
          
            if(totalTime < 60) {
              document.querySelector(".mid-container").style.color = "#e63946";
            } else {
              document.querySelector(".mid-container").style.color = "#e9e9e9";
            }
            
            document.getElementById("time-left").textContent = `${minutes}:${seconds}`
          }
        }
      }, 1000)  
    }

  function reset() {
    hasReseted = true;
    setDefault();
  }

  function setDefault() {
    setBreakLength(5);
    setSessionLength(25);
    document.getElementById("timer-label").textContent = "Session";
    document.getElementById("time-left").textContent = sessionLength > 10 ? `${sessionLength}:00` : `0${sessionLength}:00`;
    document.querySelector(".mid-container").style.color = "#e9e9e9";
    isSession = true;
    hasPaused = true;
    hasPausedBefore = false;
    hasReseted = false;
  }


  return (
    <div>
      <div className="top-container">
        <h1 className="title">25 + 5<span>Clock</span></h1>
        
        <div>
          <div>
            <div id="break-label">Break Length</div>
            <button id="break-decrement" onClick={() => setTime("break", breakLength, -1)}>
              <i className="fa-solid fa-arrow-down"></i>
            </button>
            <span id="break-length">{breakLength}</span>
            <button id="break-increment" onClick={() => setTime("break", breakLength, 1)}>
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>

          <div>
            <div id="session-label">Session Length</div>
            <button id="session-decrement" onClick={() => setTime("session", sessionLength, -1)}>
              <i className="fa-solid fa-arrow-down"></i>
            </button>
            <span id="session-length">{sessionLength}</span>
            <button id="session-increment" onClick={() => setTime("session", sessionLength, 1)}>
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
        
      </div>

        <div className="mid-container">
          <h2 id="timer-label">Session</h2>
          <div id="time-left">{sessionLength > 10 ? `${sessionLength}:00` : `0${sessionLength}:00`}</div>
        </div>

        <div className="bottom-container">
          <button id="start_stop" onClick={setPause}>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-pause"></i>
          </button>

          <button id="reset" onClick={reset}>
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        </div>

        <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
    </div>
  );
}

export default App;
