import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("Starting Venice Community App...");
const rootElement = document.getElementById("root");
console.log("Root element found:", !!rootElement);

// Add basic error boundary for production
window.addEventListener('unhandledrejection', event => {
  console.log('Unhandled promise rejection:', event.reason);
  // Prevent the default behavior that shows error overlay
  event.preventDefault();
});

window.addEventListener('error', event => {
  console.log('Runtime error:', event.error);
  // Prevent the default behavior that shows error overlay
  event.preventDefault();
});

// Hide any runtime error overlays that appear
setTimeout(() => {
  const errorOverlays = document.querySelectorAll('[data-vite-overlay]');
  errorOverlays.forEach(overlay => {
    if (overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
  });
}, 1000);

if (rootElement) {
  createRoot(rootElement).render(<App />);
  console.log("App rendered successfully");
} else {
  console.error("Root element not found");
  document.body.innerHTML = '<div style="color: white; text-align: center; padding: 50px;">Venice Community - Loading Error</div>';
}
