import { useState } from "react";

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  const setIncrementCount = () => {
    setCount((preCount) => preCount + 1);
  };
  const setDecrementCount = () => {
    setCount((preCount) => preCount - 1);
  };
  const setResetCount = () => {
    setCount(initialCount);
  };

  return [count, setIncrementCount, setDecrementCount, setResetCount]
}

export default useCounter;
