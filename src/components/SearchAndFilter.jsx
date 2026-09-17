import List from "./List";
import { useContext, useEffect, useState } from "react";
import { ExpenseDataContext } from "../context/ExpenseDataContext";
export default function SearchAndFilter({ setFilteredExpense }) {
  const { expenseData, setExpenseData } = useContext(ExpenseDataContext);
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    if (query === "") {
      setFilteredExpense(expenseData);
      return;
    } else {
      const queryLowerCase = query.toLowerCase();
      const filteredData = expenseData.filter(
        (expense) =>
          expense.description.toLowerCase().includes(queryLowerCase) ||
          expense.category.toLowerCase().includes(queryLowerCase) ||
          expense.date.toLowerCase().includes(queryLowerCase),
      );
      setFilteredExpense(filteredData);
    }
  }, [query]);

  return (
    <div className="md:grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className=" dark:bg-[#0B0B0E] border-gray-400 border-2 dark:border-gray-800 text-red-400  h-10 px-4 py-1 rounded-full mb-4 overflow-hidden">
        <i className="ri-search-line mr-1 text-xl text-red-400 "></i>
        <input
          className="outline-none"
          type="text"
          name="amount"
          min={0}
          placeholder="Search Expense"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <select
        className="  text-red-400 h-10 px-4 py-2 rounded-full mb-4 appearance-none outline-none border-2 border-gray-400 dark:bg-[#0B0B0E] dark:border-gray-800"
        name="category"
        onChange={(e) => setQuery(e.target.value)}
        required
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills & Utilities</option>
        <option value="Shopping">Shopping</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Education">Education</option>
        <option value="Other">Other</option>
      </select>

      <input
        required
        className="outline-none border-gray-400 text-red-400   h-10 px-4 py-2 rounded-full mb-4 appearance-none border-2 dark:border-gray-800"
        type="date"
        name="date"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
