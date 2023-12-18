import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MemoApp from "./MemoApp";

function App() {
  return (
    <Router>
      <div>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/memo">메모 앱</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/memo" element={<MemoApp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
