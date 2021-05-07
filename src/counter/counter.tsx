import React, { useState } from "react";
import "./counter.scss";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleConterButton = (event: any) => {
    if (event.target.name === "add") {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <React.Fragment>
      <div className="counter-outer-wrapper d-flex justify-content-center align-items-center text-center">
        <div className="counter-content-wrapper">
          <h1>Counter</h1>
          <h2 className="counter-display">{counter}</h2>
          <div className="d-flex justify-content-center align-items-center ">
            <button
              className="btn btn-primary mr-3 btn-lg"
              onClick={handleConterButton}
              name="add"
            >
              +
            </button>
            <button
              className="btn btn-danger ml-3 btn-lg"
              onClick={handleConterButton}
              name="res"
            >
              res
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Counter;
