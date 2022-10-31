import React, { useState } from "react";

function Counter() {
  const [count, setValue] = useState(0);

  const COUNTSVALUE = [2, 3, 5, 10, 100];

  const handleDecrement = () => {
    setValue((prev) => prev - 1);
  };

  const handleReset = () => {
    setValue(0);
  };

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <>
      <div className="container">
        <h1 className="count-result">Count : {count}</h1>
        <div className="click-div">
          <div className="de-increment-div">
            <button type="button" className="btn" onClick={handleDecrement}>
              DECREMENT
            </button>
            {COUNTSVALUE.map((value) => {
              return (
                <button
                  type="button"
                  key={value}
                  className="btn"
                  onClick={() => setValue(count - value)}
                >
                  -{value}
                </button>
              );
            })}
          </div>
          <div>
            <button type="button" className="btn" onClick={handleReset}>
              RESET
            </button>
          </div>
          <div className="de-increment-div">
            <button type="button" className="btn" onClick={handleIncrement}>
              INCREMENT
            </button>
            {COUNTSVALUE.map((value) => {
              return (
                <button
                  type="button"
                  key={value}
                  className="btn"
                  onClick={() => setValue(count + value)}
                >
                  +{value}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
