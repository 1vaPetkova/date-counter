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
      <Counter
        label="Step"
        initialNumber={1}
        steps={1}
        setNumber={changeSteps}
      />
      <Counter
        label="Count"
        initialNumber={0}
        steps={step}
        setNumber={changeCount}
      />
      <Message count={count} />
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

function Counter({ label, initialNumber, steps, setNumber }) {
  console.log("init", initialNumber);
  const [value, setValue] = useState(initialNumber);

  setNumber(value);

  function decrease() {
    setValue((v) => v - steps);
  }

  function increase() {
    setValue((v) => v + steps);
  }
  return (
    <div className="box">
      <button className="button" onClick={decrease}>
        -
      </button>
      <span className="label">
        {label}: {value}
      </span>
      <button className="button" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default App;
