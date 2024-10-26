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
  return (
    <div>
      <div>
        <button
          onClick={() =>
            setStep((curStep) => (curStep > 0 ? curStep - 1 : curStep))
          }
        >
          -
        </button>
        <span>Step: {step}</span>
        <button onClick={(curStep) => setStep((curStep) => curStep + 1)}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}
