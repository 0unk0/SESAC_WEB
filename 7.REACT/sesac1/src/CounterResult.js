const CounterResult = (count) => {
  console.log("CounterResult", count);

  if (count.children % 2 === 0) {
    return <div>짝수</div>;
  } else {
    return <div>홀수</div>;
  }
};

export default CounterResult;
