import { memo, useRef, useState } from "react";

export function Timer1() {
  const [count, setCount] = useState(0);

  // keep track of the timer ID using local variable
  let timerID = null;

  const startTimer = () => {
    if (!timerID) {
      timerID = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 500);
    }
    console.log("Timer ID:", timerID);
  };

  const stopTimer = () => {
    console.log("Stopping timer with ID:", timerID);

    if (timerID) {
      clearInterval(timerID);
      timerID = null;
    }
  };

  console.log("Timer1 rendered!");
  return (
    <div>
      <h1>Лічильник 1 (local Var): {count}</h1>
      <button onClick={startTimer}>Запустити</button>
      <button onClick={stopTimer}>Зупинити</button>
    </div>
  );
}

export function Timer2() {
  const [count, setCount] = useState(0);
  // keep track of the timer ID using useState
  const [timerId, setTimerId] = useState(null);

  console.log("render");

  const startTimer = () => {
    let id;
    if (!timerId) {
      id = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 5000);
      setTimerId(id);
    }
    console.log("Timer ID:", id);
  };

  const stopTimer = () => {
    console.log("Stopping timer with ID:", timerId);

    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  // console.log("Timer2 rendered!");
  return (
    <div>
      <h1>Лічильник 2 (useState): {count}</h1>
      <button onClick={startTimer}>Запустити</button>
      <button onClick={stopTimer}>Зупинити</button>
    </div>
  );
}

export const Timer3 = () => {
  // const [_, refresh] = useState(0);

  // keep track of the timer ID using useRef
  const timerRef = useRef(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        timerRef.current++;
      }, 500);
    }
    console.log("Timer ID:", timerRef.current);
  };

  const stopTimer = () => {
    console.log("Stopping timer with ID:", timerRef.current);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // const refreshView = () => {
  //   refresh((prev) => prev + 1);
  // };

  console.log("Timer3 rendered!");
  return (
    <div>
      <h1>Лічильник 3 (useRef): {timerRef.current}</h1>
      <button onClick={startTimer}>Запустити</button>
      <button onClick={stopTimer}>Зупинити</button>
      {/* <button onClick={refreshView}>Оновити</button> */}
    </div>
  );
};

export const MemoizedTimer3 = memo(Timer3);
