import React, { useReducer } from "react";
import { Helmet } from "react-helmet-async";
import reducer from "../hooks/Reduce";

const initialstate = { count: 0 };

function Counter() {
  const COUNTSVALUE = [2, 3, 5, 10, 100];

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleExtraDecrement = (e) => {
    const value = parseInt(e.target.id);
    dispatch({ type: "extradecrement", value: value });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleExtraIncrement = (e) => {
    const value = parseInt(e.target.id);
    dispatch({ type: "extraincrement", value: value });
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <Helmet>
        <title>Counter</title>
        <meta
          name="description"
          content="counter reader for increment, decrement and reseting counts"
        />
        <link rel="canonical" href="/counter" />
      </Helmet>
      <div className="container">
        <div className="count-container">
          <h1 className="count-result">Count : {state.count}</h1>
        </div>
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
                  id={value}
                  onClick={handleExtraDecrement}
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
                  id={value}
                  onClick={handleExtraIncrement}
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
