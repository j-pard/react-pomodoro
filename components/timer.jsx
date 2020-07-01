import React, { useState } from 'react';

const Timer = () => {

      const defaultTime = 10;
      const [time, setTime] = useState(defaultTime); // seconds 
      const [isStopped, setIsStopped] = useState(true); // Init stopped
      const [isRunning, setIsRunning] = useState(false); // Interval

      let timer = time;
      let minutes;
      let seconds;
      let interval = null;

      const addTime = () => {
            if(isStopped) {
                  setTime(time + 60);
            }
      };

      const reduceTime = () => {
            if(isStopped) {
                  setTime(time - 60);
            }
      };

      const resetTime = () => {
            if(isStopped) {
                  setTime(defaultTime);
            }
      };

      const startTimer = () => {
            interval = setInterval(() => {
                  if(timer == 0) {
                        clearInterval(interval);
                        setIsStopped(true);
                  }
                  else {
                        setIsStopped(false);
                        timer--;
                  }
                  setTime(timer);
                        
                  }, 1000);               
      };

      const showTime = (timer) => {
            minutes = Math.floor(timer/60);
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = timer - (minutes*60);
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            return `${minutes} : ${seconds}`;
      }

      return (
            <div className="timer">
                  <div className="time">
                        {showTime(timer)}
                  </div>

                  <div className="controller-btn">
                        <button className="btn" onClick={addTime}>+</button>
                        <button className="btn" onClick={resetTime}>Reset</button>
                        <button className="btn" onClick={startTimer}>Start</button>
                        <button className="btn" onClick={reduceTime}>-</button>
                  </div>
            </div>
      );
};

export default Timer;