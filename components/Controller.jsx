import React, { useState } from 'react';

const Controller = () => {

      const [isStarted, setIsstarted] = useState(false);
      const [time, setTime] = useState(1200); // 1200s -> 60s * 20m

      return (
            <div className="controller-btn">
                  <button className="btn">+</button>
                  <button className="btn">Reset</button>
                  <button className="btn">Start</button>
                  <button className="btn">-</button>
            </div>
      );
};

export default Controller;