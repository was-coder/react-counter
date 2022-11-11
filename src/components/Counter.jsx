import React, { useReducer, useState } from "react";
import { Helmet } from "react-helmet-async";
import reducer from "../hooks/Reduce";

const initialstate = { count: 0 };

function Counter() {
  const [value, setValue] = useState("");
  const COUNTSVALUE = [2, 3, 5, 10, 100];

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleExtraDecrement = (e) => {
    const extraValue = parseInt(e.target.id);
    dispatch({ type: "extradecrement", value: extraValue });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleExtraIncrement = (e) => {
    const extraValue = e.target.id;
    dispatch({ type: "extraincrement", extraValue: extraValue });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSetCount = (e) => {
    e.preventDefault();
    dispatch({ type: "setcounthandle", value: value });
    setValue("");
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
        <div>
          <form>
            <input
              placeholder={`Set a count`}
              type="number"
              id="value"
              className="form-input"
              value={value}
              onChange={handleChange}
            />
            <button onClick={handleSetCount} className="btn form-btn">
              SET COUNT
            </button>
          </form>
        </div>
        <div className="click-div">
          <div className="de-increment-div">
            <button type="button" className="btn" onClick={handleDecrement}>
              DECREMENT
            </button>
            {COUNTSVALUE.map((extraValue) => {
              return (
                <button
                  type="button"
                  key={extraValue}
                  className="btn"
                  id={extraValue}
                  onClick={handleExtraDecrement}
                >
                  -{extraValue}
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
            {COUNTSVALUE.map((extraValue) => {
              return (
                <button
                  type="button"
                  key={extraValue}
                  className="btn"
                  id={extraValue}
                  onClick={handleExtraIncrement}
                >
                  +{extraValue}
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
