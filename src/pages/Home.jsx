import { Link } from "react-router";

function Home() {
  return (
    <div className=" bg-[#F5F5F7] dark:bg-[#0B0B0E]">
      <div className="bg-red-500/20 blur-3xl rounded-xl absolute top-1/2 left-1/2  translate-[-50%]  w-100 h-"></div>
      <div className="relative flex flex-col items-center justify-center mt-35">
        <h1 className="w-220 text-center text-6xl font-bold dark:text-white text-[#18181B] mb-6">
          Master your <span className="text-red-500">Expenses </span>
          without the spreadsheet hassle
        </h1>
        <p className="dark:text-red-300 text-red-500 text-xl w-200 text-center">
          A privacy-first expense tracker for everyday spending. Add expenses
          quickly, track your balance, and stay within budget
        </p>
        <Link className="" to="/overview">
          <button className=" hover:shadow-red-600/50 shadow-md  bg-red-500 text-white font-semibold outline-none h-12 px-6 py-2 rounded-full mt-4 transition-all duration-200">
            <i className="ri-add-fill text-xl"></i> Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
