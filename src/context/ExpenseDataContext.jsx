import { createContext, useEffect, useState } from "react";

export const ExpenseDataContext = createContext();

export function ExpenseDataContextProvider({ children }) {
  const [expenseData, setExpenseData] = useState(
     [
  {
    id: "EXP001",
    description: "Lunch",
    amount: "150",
    category: "Food",
    date: "2026-09-12",
  },
  {
    id: "EXP002",
    description: "Uber ride",
    amount: "200",
    category: "Transport",
    date: "2026-09-12",
  },
  {
    id: "EXP003",
    description: "Electricity bill",
    amount: "1400",
    category: "Bills",
    date: "2026-09-11",
  },
  {
    id: "EXP004",
    description: "New T-shirt",
    amount: 799,
    category: "Shopping",
    date: "2026-09-10",
  },
  {
    id: "EXP005",
    description: "Movie ticket",
    amount: 350,
    category: "Entertainment",
    date: "2026-09-09",
  },
  {
    id: "EXP006",
    description: "Programming course",
    amount: 999,
    category: "Education",
    date: "2026-09-08",
  },
  {
    id: "EXP007",
    description: "Mobile recharge",
    amount: 299,
    category: "Bills",
    date: "2026-09-07",
  },
  {
    id: "EXP008",
    description: "Pizza with friends",
    amount: 540,
    category: "Food",
    date: "2026-09-06",
  },
  {
    id: "EXP009",
    description: "Auto ride home",
    amount: 90,
    category: "Transport",
    date: "2026-09-06",
  },
  {
    id: "EXP010",
    description: "Notebook and pens",
    amount: 275,
    category: "Education",
    date: "2026-09-05",
  },
  {
    id: "EXP011",
    description: "Sneakers",
    amount: 2499,
    category: "Shopping",
    date: "2026-09-04",
  },
  {
    id: "EXP012",
    description: "Netflix subscription",
    amount: 649,
    category: "Entertainment",
    date: "2026-09-03",
  },
  {
    id: "EXP013",
    description: "Breakfast",
    amount: 150,
    category: "Food",
    date: "2026-09-03",
  },
  {
    id: "EXP014",
    description: "Bus pass",
    amount: 600,
    category: "Transport",
    date: "2026-09-02",
  },
  {
    id: "EXP015",
    description: "Internet bill",
    amount: 799,
    category: "Bills",
    date: "2026-09-01",
  },
  {
    id: "EXP016",
    description: "USB-C cable",
    amount: 449,
    category: "Shopping",
    date: "2026-08-31",
  },
  {
    id: "EXP017",
    description: "College fest ticket",
    amount: 300,
    category: "Entertainment",
    date: "2026-08-30",
  },
  {
    id: "EXP018",
    description: "Data structures textbook",
    amount: 650,
    category: "Education",
    date: "2026-08-29",
  },
  {
    id: "EXP019",
    description: "Coffee and sandwich",
    amount: 210,
    category: "Food",
    date: "2026-08-28",
  },
  {
    id: "EXP020",
    description: "Petrol",
    amount: 700,
    category: "Transport",
    date: "2026-08-27",
  },
  {
    id: "EXP021",
    description: "Water bill",
    amount: 350,
    category: "Bills",
    date: "2026-08-26",
  },
  {
    id: "EXP022",
    description: "Phone case",
    amount: 599,
    category: "Shopping",
    date: "2026-08-25",
  },
  {
    id: "EXP023",
    description: "Gaming subscription",
    amount: 399,
    category: "Entertainment",
    date: "2026-08-24",
  },
  {
    id: "EXP024",
    description: "Online coding book",
    amount: 499,
    category: "Education",
    date: "2026-08-23",
  },
]
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
