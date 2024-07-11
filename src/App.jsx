import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello World</h1>
      <Outlet />
    </div>
  );
}
export default App;
