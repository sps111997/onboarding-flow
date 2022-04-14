import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/page1";
import WelcomePage2 from "./pages/page2";
import WelcomePage3 from "./pages/page3";
import WelcomePage4 from "./pages/page4";

function App() {
  return (
    <div className="layOut">
      <Router>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/next-2" element={<WelcomePage2 />} />
          <Route exact path="/next-3" element={<WelcomePage3 />} />
          <Route exact path="/next-4" element={<WelcomePage4 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
