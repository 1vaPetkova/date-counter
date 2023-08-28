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

  return (
    <div className="dates">
      <Step setNumber={changeSteps} />
      <Count
        label="Count"
        initialNumber={0}
        steps={step}
        setNumber={changeCount}
      />
      <Message count={count} />
    </div>
  );
}

function Step({ setNumber }) {
  const [value, setValue] = useState(1);

  setNumber(value);

  return (
    <div className="box">
      <input
        type="range"
        min="1"
        max="10"
        step="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      ></input>
      <label for="input">Step: {value}</label>
    </div>
  );
}

function Count({ initialNumber, steps, setNumber }) {
  const [value, setValue] = useState(initialNumber);

  function decrease() {
    setValue((v) => v - steps);
  }

  function increase() {
    setValue((v) => v + steps);
  }

  setNumber(value);

  return (
    <div className="box">
      <button className="button" onClick={decrease}>
        -
      </button>
      <input
        type="text"
        step="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      ></input>
      <button className="button" onClick={increase}>
        +
      </button>
      <label for="input">Count: {value}</label>
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
