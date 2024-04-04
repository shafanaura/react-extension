import React from "react";
import { createRoot } from "react-dom/client";
import ContentScript from "./contentScript";

function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error("Cannot find AppContainer");
  }
  const root = createRoot(appContainer);
  root.render(<ContentScript />);
}

init();
