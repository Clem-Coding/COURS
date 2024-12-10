import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jour1 from "./pages/Jour1";
import Jour2 from "./pages/Jour2";
import Jour3 from "./pages/Jour3";
import FormPage from "./components/exercice-form/FormPage";

import React from "react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jour1" element={<Jour1 />} />
        <Route path="/jour2" element={<Jour2 />} />
        <Route path="/jour3" element={<Jour3 />} />
        <Route path="/exercice-form" element={<FormPage />} />
      </Routes>
    </Router>
  );
}
