import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseValue = () => {
    if (count + 1 > 20) return;
    setCount((prev) => prev + 1);
  };

  const decreaseValue = () => {
    if (count - 1 < 0) return;
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increaseValue} style={{ marginRight: "5px" }}>
        Increse value
      </button>
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  );
}

export default App;
