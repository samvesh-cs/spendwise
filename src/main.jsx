import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { ExpenseDataContextProvider } from "./context/ExpenseDataContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  <ExpenseDataContextProvider>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  
  </ExpenseDataContextProvider>,
);
