import { Route, Routes } from "react-router";
import { useContext, useEffect } from "react";
import { OtherContext } from "./context/OtherContext";
import NavigationBar from "./components/NavigationBar";
import Overview from "./pages/Overview";
import AddExpense from "./pages/AddExpense";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";

export default function App() {
  const { theme } = useContext(OtherContext);

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
    <div className="w-full min-h-screen flex flex-col dark:bg-[#0B0B0E] bg-[#F5F5F7]">
      <header>
        <NavigationBar />
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/addexpense" element={<AddExpense />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </main>
    </div>
  );
}
