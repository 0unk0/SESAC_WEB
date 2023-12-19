import "./App.css";
import { useState, useEffect } from "react";

import api from "./api";
import Click from "./Click";
import Hello from "./Hello";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // express로 부터 데이터 가져오기..
    // fetch("http://127.0.0.1:5000/api/data")
    //   .then((response) => response.json())
    //   .then((data) => setData(data.message))
    //   .catch((error) => console.error("Error fetching data:", error));
    api
      .get("/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("에러:", error);
      });
  }, []); // 의존성 변수, 해당 값이 변경될 떄 자동으로 요청해서 화면에 렌더링을 하기 위함

  const handleButtonClick = () => {
    setCount(count + 1);
  };
  const handleResetClick = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>리액트 + Express 통합 앱</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <Click onButtonClick={handleButtonClick} onResetClick={handleResetClick}></Click>
        <p>마우스 클릭 횟수는 {count} 입니다.</p>
        <Hello />
      </header>
    </div>
  );
}

export default App;
