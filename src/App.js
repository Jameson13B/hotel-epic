import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { About } from "./Views/About";
import { Join } from "./Views/Join";
import { Home } from "./Views/Home";
import { See } from "./Views/See";
import { Form } from "./Views/Form";
import { Admin } from "./Views/Admin";

function App() {
  return (
    <div className="App">
      <header className="App-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/see" element={<See />} />
          <Route path="/form" element={<Form />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
