import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ParentOne from "./Components/ParentOne";
import { decrement, increment } from "./Redux/counterSlice";

const App = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      The counter value in APP is {count}
      <div>
        <ParentOne />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Add 1
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Minus 1
        </button>
      </div>
    </div>
  );
};

export default App;
