import { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

export default function NavigationBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  const SetThemeButton = () => {
    return (
      <button
        className="text-red-500 hover:scale-110  transition  duration-200"
        onClick={handleChangeTheme}
      >
        {theme == "light" ? (
          <i className="ri-moon-fill text-2xl"></i>
        ) : (
          <i className="ri-sun-fill text-2xl  "></i>
        )}
      </button>
    );
  };

  return (
    <nav className=" dark:bg-[#171117] w-full bg-[#FFFFFF] dark:text-white flex justify-between px-8 py-3  items-center mb-5 border-b dark:border-gray-800 border-gray-200 fixed top-0 z-50">
      <div>
        <h1 className="font-bold text-2xl flex  ">
          <div className="dark:bg-red-500 bg-red-500 px-2 aspect-sqaure rounded-full flex items-center justify-center p-1 mr-1 shadow-md ">
            <i className="ri-wallet-3-fill text-xl "></i>
          </div>
          Spend<span className="text-red-500">Wise</span>
        </h1>
      </div>

      <div className="md:flex gap-10 text-lg font-medium hidden">
        <Link
          className="rounded-full px-4 py-1 border border-transparent hover:bg-red-600/20 hover:scale-105 hover:border-red-500 dark:hover:bg-red-500/30 dark:hover:border-red-500  transition  duration-150 hover:shadow-md hover:shadow-red-600/30"
          to="/"
        >
          <h1>Overview</h1>
        </Link>
        <Link
          className="rounded-full px-4 py-1 border border-transparent hover:bg-red-600/20 hover:scale-105 hover:border-red-500 dark:hover:bg-red-500/30 dark:hover:border-red-500  transition  duration-150 hover:shadow-md hover:shadow-red-600/30"
          to="/addexpense"
        >
          {" "}
          <h1>Add Expense</h1>
        </Link>
        <Link
          className="rounded-full px-4 py-1 border border-transparent hover:bg-red-600/20 hover:scale-105 hover:border-red-500 dark:hover:bg-red-500/30 dark:hover:border-red-500  transition  duration-150 hover:shadow-md hover:shadow-red-600/30"
          to="/transactions"
        >
          {" "}
          <h1>Transactions</h1>
        </Link>

        <SetThemeButton />
      </div>
    </nav>
  );
}
