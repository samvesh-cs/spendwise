import { Route, Routes } from "react-router";
import { useContext, useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import Overview from "./pages/Overview";
import AddExpense from "./pages/AddExpense";
import Transactions from "./pages/Transactions";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const html = document.querySelector("html");
    if (theme == "light") {
      html.classList.remove("dark");
      html.classList.add("light");
    } else if (theme == "dark") {
      html.classList.remove("light");
      html.classList.add("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="w-full h-screen">
        <NavigationBar />
        <main className="px-4 md:px-8 pt-20">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/addexpense" element={<AddExpense />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
