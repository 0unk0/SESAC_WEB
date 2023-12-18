// import React from "react"; // 현재 버전에선 필요 X
import { useState } from "react";
import CounterResult from "./CounterResult";

const Counter = (props) => {
  console.log("Counter 호출", props);

  //   let count = 0;
  const [count, setCount] = useState(0); // [변수, 변수 제어 함수] = 초기값 0

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <CounterResult count={count} />
    </div>
  );
};

export default Counter;
