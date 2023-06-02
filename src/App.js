import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Home from "./Routes/Home";
import Woman from "./Routes/Woman";
import Man from "./Routes/Man";
import Kids from "./Routes/Kids";
import Header from "./Components/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/man" element={<Man />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
