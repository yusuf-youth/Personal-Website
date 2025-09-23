import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.scss";
import { LanguageProvider } from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
