import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const test = (
  <div className="text-lg text-green-600 p-5">
    <h1>Options</h1>
    <img src="assets/samamentor.jpg" alt="y" />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
