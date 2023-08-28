import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function changeSteps(value) {
    setStep(value);
  }

  function changeCount(value) {
    setCount(value);
  }

  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="dates">
      <Step step={step} setNumber={changeSteps} />
      <Count count={count} steps={step} setNumber={changeCount} />
      <Message count={count} />
      <p>
        {count !== 0 || step !== 1 ? (
          <button className="button" onClick={reset}>
            Reset
          </button>
        ) : (
          <></>
        )}
      </p>
    </div>
  );
}

function Step({ step, setNumber }) {
  return (
    <div className="box">
      <input
        type="range"
        min="1"
        max="10"
        step="1"
        value={step}
        onChange={(e) => setNumber(Number(e.target.value))}
      ></input>
      <label for="input">Step: {step}</label>
    </div>
  );
}

function Count({ count, steps, setNumber }) {
  return (
    <div className="box">
      <button
        className="button"
        onClick={() => setNumber(count - Number(steps))}
      >
        -
      </button>
      <input
        type="number"
        step="1"
        value={count}
        onChange={(e) => setNumber(Number(e.target.value))}
      ></input>
      <button
        className="button"
        onClick={() => setNumber(count + Number(steps))}
      >
        +
      </button>
      <label for="input">Count: {count}</label>
    </div>
  );
}

function Message({ count }) {
  let d = new Date();
  d.setDate(d.getDate() + count);
  let message = `Today is ${d.toUTCString()}`;

  const daysStr = Math.abs(count) !== 1 ? "days" : "day";
  if (count > parseInt("0")) {
    message = `${Math.abs(count)} ${daysStr} from today is ${d.toUTCString()}`;
  } else if (count < parseInt("0")) {
    message = `${Math.abs(count)} ${daysStr} ago was ${d.toUTCString()}`;
  }
  return <div>{message}</div>;
}

export default App;
