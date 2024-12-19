import React from "react";
import "./Navbar.css";

function Navbar({ onModelSelect }) {
  return (
    <header className="navbar">
      <div className="logo">MedxAI</div>
      <nav>
        <ul>
          <li>
            <button onClick={() => onModelSelect("Model1")}>Model1</button>
          </li>
          <li>
            <button onClick={() => onModelSelect("Model2")}>Model2</button>
          </li>
          <li>
            <button onClick={() => onModelSelect("Model3")}>Model3</button>
          </li>
          <li>
            <button onClick={() => onModelSelect("Model4")}>Model4</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
