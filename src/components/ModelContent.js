import React from "react";
import "./ModelContent.css";

function ModelContent({ modelName }) {
  return (
    <section className="model-content">
      <h2>{modelName}</h2>
      <p>
        {modelName === "Welcome!"
          ? "Use the navigation menu to explore the ML models for medical applications."
          : `You have selected the "${modelName}" model.`}
      </p>
    </section>
  );
}

export default ModelContent;
