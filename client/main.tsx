import { createRoot, type Root } from "react-dom/client";
import App from "./App";

declare global {
  interface Window {
    __reactRoot?: Root;
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  // Check if root already exists (HMR case)
  if (!window.__reactRoot) {
    window.__reactRoot = createRoot(rootElement);
  }
  window.__reactRoot.render(<App />);
}

// Handle HMR updates
if (import.meta.hot) {
  import.meta.hot.accept("./App", () => {
    // Re-render with new App component
    if (window.__reactRoot && rootElement) {
      window.__reactRoot.render(<App />);
    }
  });
}
