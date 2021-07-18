import React from "react";

export function useCounter() {
  const [counter, setCounter] = React.useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  if (counter < 0) {
    setCounter(0);
  }
  return { counter, increment, decrement };
}
