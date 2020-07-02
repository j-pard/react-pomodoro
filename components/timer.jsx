import React, { useState, Component } from 'react';

class Timer extends Component {

      constructor (props) {
            super(props);
            this.state = {time: 1200, interval: null}
      }

      showTime = (time) => {
            let minutes = Math.floor(time/60);
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            let seconds = time - (minutes*60);
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            return `${minutes} : ${seconds}`;
      }

      addTime = () => {
            if(this.state.interval == null) {
                  this.setState((state, props) => ({time: state.time + 60}));
            }
      }

      removeTime = () => {
            if(this.state.interval == null) {
                  if(this.state.time > 0) {
                        this.setState((state, props) => ({time: state.time - 60}));
                  }
            }
      }

      reset = () => {
            this.pause();
            this.setState((state, props) => ({time: state.time = 1200}));
      }

      decrement = () => {
            if(this.state.time > 0) {
                  this.setState((state, props) => ({time: state.time - 1}));
            }
            else {
                  this.pause();
            }
      }

      play = () => {
            this.pause();
            this.setState({
                  interval:  setInterval(this.decrement.bind(this), 1000)
            })
      }

      pause = () => {
            clearInterval(this.state.interval);
            this.setState({interval: null});
      }

      toggle = () => {
            return this.state.interval ? this.pause() : this.play();
      }

      label = () => {
            return this.state.interval ? "pause" : "play";
      }

      render = () => {
            return (
                  <div className="timer">
                        <div className="time">
                              {this.showTime(this.state.time)}
                        </div>
      
                        <div className="controller-btn">
                              <button className="btn" onClick={this.addTime.bind(this)}>+</button>
                              <button className="btn" onClick={this.reset.bind(this)}>Reset</button>
                              <button className="btn" onClick={this.toggle.bind(this)}>{this.label()}</button>
                              <button className="btn" onClick={this.removeTime.bind(this)}>-</button>
                        </div>
                  </div>
            );
      }

}

// const Timer = () => {

//       const defaultTime = 10;
//       const [time, setTime] = useState(defaultTime); // seconds 
//       const [button, setButton] = useState("time");


//       let timer = time;
//       let minutes;
//       let seconds;
//       let interval = 1;
//       let isStopped = true;

//       const addTime = () => {
//             if(isStopped) {
//                   setTime(time + 60);
//             }
//       };

//       const reduceTime = () => {
//             if(isStopped) {
//                   setTime(time - 60);
//             }
//       };

//       const resetTime = () => {
//             if(isStopped) {
//                   setTime(defaultTime);
//             }
//       };

//       const showTime = (timer) => {
//             minutes = Math.floor(timer/60);
//             minutes = minutes < 10 ? `0${minutes}` : minutes;
//             seconds = timer - (minutes*60);
//             seconds = seconds < 10 ? `0${seconds}` : seconds;
//             return `${minutes} : ${seconds}`;
//       }

//       const toggleTimer = () => {
//             if(button == "STOP") {
//                   clearInterval(interval);
//                   setButton("time");
//             }
//             else {
//                   setButton("STOP");
//                   interval = setInterval(() => {
//                         if(timer == 0) {
//                               clearInterval(interval);
//                               isStopped = true;
//                               setButton("time");
//                         }
//                         else {
//                               isStopped = false;
//                               timer--;
//                         }
//                         setTime(timer);
//                   }, 1000);   
//             }        
//       };      

//       return (
//             <div className="timer">
//                   <div className="time">
//                         {showTime(timer)}
//                   </div>

//                   <div className="controller-btn">
//                         <button className="btn" onClick={addTime}>+</button>
//                         <button className="btn" onClick={resetTime}>Reset</button>
//                         <button id="toggle" className="btn" onClick={toggleTimer}>{button}</button>
//                         <button className="btn" onClick={reduceTime}>-</button>
//                   </div>
//             </div>
//       );
// };

export default Timer;