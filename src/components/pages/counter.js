import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // TO DECREASE THE COUNTER VALUE
  const counterDecrease = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  // TO INCREASE THE COUNTER VALUE
  const counterIncrease = () => {
    if (counter >= 10) {
      setCounter(10);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="section_wrapper">
      <div className="counter_wrapper">
        <div className="counter">{counter}</div>
        <div className="button_section">
          <div className="button_wrapper">
            <button
              disabled={counter <= 0}
              className="btn"
              onClick={() => counterDecrease()}
            >
              Decrease Counter
            </button>
          </div>
          <div className="button_wrapper">
            <button
              disabled={counter >= 10}
              className="btn"
              onClick={() => counterIncrease()}
            >
              Increase Counter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
