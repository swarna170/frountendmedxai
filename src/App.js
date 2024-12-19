import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ModelContent from "./components/ModelContent";

function App() {
  const [selectedModel, setSelectedModel] = useState("Welcome!");

  const handleModelSelect = (modelName) => {
    setSelectedModel(modelName);
  };

  return (
    <div>
      <Navbar onModelSelect={handleModelSelect} />
      <Hero />
      <ModelContent modelName={selectedModel} />
    </div>
  );
}

export default App;
