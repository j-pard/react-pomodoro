import React, { useState } from 'react';

const Timer = () => {

      const defaultTime = 10;
      const [time, setTime] = useState(defaultTime); // seconds 
      const [button, setButton] = useState("START");


      let timer = time;
      let minutes;
      let seconds;
      let interval = 1;
      let isStopped = true;

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

      const showTime = (timer) => {
            minutes = Math.floor(timer/60);
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = timer - (minutes*60);
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            return `${minutes} : ${seconds}`;
      }

      const toggleTimer = () => {
            if(button == "STOP") {
                  clearInterval(interval);
                  setButton("START");
            }
            else {
                  setButton("STOP");
                  interval = setInterval(() => {
                        if(timer == 0) {
                              clearInterval(interval);
                              isStopped = true;
                              setButton("START");
                        }
                        else {
                              isStopped = false;
                              timer--;
                        }
                        setTime(timer);
                  }, 1000);   
            }        
      };      

      return (
            <div className="timer">
                  <div className="time">
                        {showTime(timer)}
                  </div>

                  <div className="controller-btn">
                        <button className="btn" onClick={addTime}>+</button>
                        <button className="btn" onClick={resetTime}>Reset</button>
                        <button id="toggle" className="btn" onClick={toggleTimer}>{button}</button>
                        <button className="btn" onClick={reduceTime}>-</button>
                  </div>
            </div>
      );
};

export default Timer;