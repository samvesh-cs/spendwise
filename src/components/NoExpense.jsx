import EditingForm from "./EditingForm";
import { Link } from "react-router";
export default function NoExpense() {
  return (
    <div className="flex justify-center items-center flex-col h-80 ">
      <h1 className="text-3xl font-semibold dark:text-white text-black">
        No Expense Yet
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-500">
        Start tracking your spending by adding your first expense
      </p>
      <Link to="/addexpense"      >
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-500/80 text-white font-semibold outline-none h-12 px-4 py-2 rounded-full mt-4 transition-all duration-200"
        >
          <i className="ri-add-fill text-xl"></i> ADD EXPENSE
        </button>
      </Link>
    </div>
  );
}
