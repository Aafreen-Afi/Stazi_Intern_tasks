import "./App.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<HotelDetails />} />
    </Routes>
  );
}

export default App;
