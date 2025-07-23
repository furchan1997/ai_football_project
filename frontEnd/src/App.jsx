import "./App.css";
import Favorites from "./Components/Favorites";
import Header from "./Components/Header";
import { Router, Route, Routes } from "react-router-dom";
import ChatBox from "./Components/ChatBox";
import News from "./Components/news";
function App() {
  return (
    <div className="ai-football-app min-vh-100 rtl">
      <header>
        <Header />
      </header>

      <div className="d-flex flex-column">
        <main>
          <Routes>
            <Route element={<ChatBox />} path="/" />
            <Route element={<Favorites />} path="/Favorites" />
            <Route element={<News />} path="/News" />
          </Routes>
        </main>
        <footer>
          <p>FOOTER</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
