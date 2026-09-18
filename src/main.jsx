import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ExpenseDataContextProvider } from "./context/ExpenseDataContext.jsx";
import { OtherContextProvider } from "./context/OtherContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ExpenseDataContextProvider>
    <OtherContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OtherContextProvider>
  </ExpenseDataContextProvider>,
);
