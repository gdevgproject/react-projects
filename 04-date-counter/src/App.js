import { useState } from "react";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  let date = new Date();
  date.setDate(date.getDate() + count);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    week: "long",
    month: "long",
    year: "numeric",
  }).format(date);

  date.setDate(date.getDate() + count);

  function handleStep(e) {
    setStep(+e.target.value);
  }

  function handleCount(e) {
    setCount(+e.target.value);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          step="1"
          min="1"
          max="10"
          value={step}
          onChange={handleStep}
        ></input>

        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input type="text" value={count} onChange={handleCount}></input>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{formattedDate}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : (
        ""
      )}
    </div>
  );
}
