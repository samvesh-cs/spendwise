import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

export default function NavigationBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  const handleChangeTheme = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <nav className="bg-[#171117] w-full text-white flex justify-between px-8 py-3  items-center mb-5 border-b border-gray-800 fixed top-0 z-50">
      <div>
        <h1 className="font-bold text-2xl flex">
          <div className="bg-red-500 px-2 aspect-sqaure rounded-full flex items-center justify-center p-1 mr-1 ">
            <i className="ri-wallet-3-fill text-xl "></i>
          </div>
          Spend<span className="text-red-500">Wise</span>
        </h1>
      </div>

      <div className="md:flex gap-15 text-lg font-medium hidden ">
        <Link
          className="px-3 py-1 border border-transparent hover:bg-white/10 hover:border-gray-600 rounded-full transition  duration-200"
          to="/"
        >
          <h1>Overview</h1>
        </Link>
        <Link
          className="px-3 py-1 border border-transparent hover:bg-white/10 hover:border-gray-600 rounded-full transition  duration-200"
          to="/addexpense"
        >
          {" "}
          <h1>Add Expense</h1>
        </Link>
        <Link
          className="px-3 py-1 border border-transparent hover:bg-white/10 hover:border-gray-600 rounded-full transition  duration-200"
          to="/transactions"
        >
          {" "}
          <h1>Transactions</h1>
        </Link>
      </div>
      <div>
        <button onClick={handleChangeTheme}>Change Theme</button>
      </div>
    </nav>
  );
}
