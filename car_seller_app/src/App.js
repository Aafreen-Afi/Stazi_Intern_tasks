import "./App.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";

function App() {
  return (
    <Routes>
      <Route path="/page/:page" element={<Home />} />
      <Route path="/" element={<Navigate to="/page/1" />} />
      <Route path="/car/:id" element={<CarDetails />} />
    </Routes>
  );
}

export default App;
