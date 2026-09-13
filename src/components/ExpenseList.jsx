import List from "./List";
export default function ExpenseList() {
  return (
    <div className="px-4 py-4 md:px-8 md:py-5 md:w-3/5 rounded-4xl  dark:bg-[#14141A] dark:border-gray-800 bg-[#FFFFFF] border border-gray-200 shadow-md">
      <h1 className="text-4xl font-bold mb-3 dark:text-white text-[#18181B]">
        Recent <span className="text-red-500">Expenses</span>
      </h1>

      <List />
    </div>
  );
}
