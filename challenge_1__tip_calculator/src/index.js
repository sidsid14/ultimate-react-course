import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import IteratorTest from "./components/IteratorTest";
import { IteratorProvider } from "./contexts/IteratorContext";
import Form from "./components/Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <IteratorProvider>
      <IteratorTest />
    </IteratorProvider> */}
    <Form />
  </React.StrictMode>
);
