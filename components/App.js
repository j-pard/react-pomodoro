import React from "react";
import Timer from './timer';
import Controller from './controller';

const App = () => {
  return (
        <main>
            <div>
                  <h1>React Pomodoro</h1>
            </div>
            
            <div className="count">
                  <Timer/>
                  <Controller/>
            </div>
      </main>
  );
};

export default App;