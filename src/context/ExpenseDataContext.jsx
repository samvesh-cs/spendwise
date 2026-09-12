import { createContext, useEffect, useState } from "react";

export const ExpenseDataContext = createContext();

export function ExpenseDataContextProvider({ children }) {
  const [expenseData, setExpenseData] = useState(
    JSON.parse(localStorage.getItem("expenseData")) || [],
  );
  function saveData() {
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
  }

  useEffect(() => {
    saveData();
  }, [expenseData]);

  return (
    <ExpenseDataContext.Provider value={{ expenseData, setExpenseData }}>
      {children}
    </ExpenseDataContext.Provider>
  );
}
