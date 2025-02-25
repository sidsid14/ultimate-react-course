import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import BankAcc from "./BankAcc";
import { QuizProvider } from "./contexts/QuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
    {/* <BankAcc /> */}
  </React.StrictMode>
);
