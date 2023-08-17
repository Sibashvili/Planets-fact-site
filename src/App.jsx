import "./App.css";
import data from "../data.json";
import { Navigate, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Planets from "./components/planets.jsx";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/planets/mercury" />} />
        <Route path="/planets/:name" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
