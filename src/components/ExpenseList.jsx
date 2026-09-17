import { useContext, useEffect, useState } from "react";
import { ExpenseDataContext } from "../context/ExpenseDataContext";
import SearchAndFilter from "./SearchAndFilter";
import List from "./List";
export default function ExpenseList() {
  const { expenseData, setExpenseData } = useContext(ExpenseDataContext);
  const [filteredExpense, setFilteredExpense] = useState(expenseData);
  useEffect(() => {
    setFilteredExpense(expenseData);
  }, [expenseData]);
  return (
    <div>
      <SearchAndFilter setFilteredExpense={setFilteredExpense} />
      <List data={filteredExpense} />
    </div>
  );
}
