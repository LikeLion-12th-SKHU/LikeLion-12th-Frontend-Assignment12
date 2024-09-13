import React from "react";
import { Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar";
import Hobby from "./Hobby";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Hobby />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
