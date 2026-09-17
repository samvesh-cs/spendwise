import ExpenseList from "../components/ExpenseList";
import List from "../components/List";

export default function Transactions() {
  return (
    <div className="px-8 mt-6">
    <div className="px-4 py-2.5 md:px-8 md:py-5  rounded-4xl dark:bg-[#14141A] dark:border-gray-800 bg-[#FFFFFF] border border-gray-200 h-160 overflow-y-auto scrollbar-none">
      <h1 className="text-4xl font-bold mb-3 dark:text-white text-[#18181B] e">
        All <span className="text-red-500">Expenses</span>
      </h1>
      <ExpenseList />
    </div>
    </div>
  );
}
