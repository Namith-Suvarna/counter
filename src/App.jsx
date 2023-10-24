import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(5);

  const addHandler = () => {
    if (value < 20) {
      setValue((prevValue) => prevValue + 1);
    }
  };
  const removeHandler = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h3>Counter value: {value}</h3>

      <button onClick={addHandler}>ADD VALUE</button>
      <br />
      <br />
      <button onClick={removeHandler}>REMOVE VALUE</button>
    </>
  );
}

export default App;
