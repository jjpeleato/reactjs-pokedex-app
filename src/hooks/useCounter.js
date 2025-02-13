import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const add = (value = 1) => {
    setCounter(counter + value);
  };

  const subtract = (value = 1) => {
    if (counter === initialValue) return;

    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return { counter, add, subtract, reset };
};
