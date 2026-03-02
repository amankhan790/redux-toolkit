import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/features/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [num, setNum] = useState(5);

  return (
    <div className="container">
      <h1>Hello Counter {count}</h1>

      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <br />
      <button onClick={() => dispatch(increment())}>Increament</button>
      <button onClick={() => dispatch(decrement())}>Decreament</button>
      <button onClick={() => dispatch(incrementByAmount(Number(num)))}>
        IncreamentByAmount
      </button>
    </div>
  );
};

export default App;
