import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "../data.json";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
