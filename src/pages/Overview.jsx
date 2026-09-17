import { useContext } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";
import { ExpenseDataContext } from "../context/ExpenseDataContext";

export default function Overview() {
  const { expenseData } = useContext(ExpenseDataContext);

  const totalSpending = () => {
    let total = expenseData.reduce(
      (total, expense) => total + Number(expense.amount),
      0,
    );
    return "₹" + total.toLocaleString();
  };

  const currentMonthSpending = () => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const currentMonthExpenses = expenseData.filter((expense) => {
      const date = new Date(expense.date);

      return (
        date.getFullYear() == currentYear &&
        date.getMonth() + 1 === currentMonth
      );
    });

    let total = currentMonthExpenses.reduce(
      (total, expense) => total + Number(expense.amount),
      0,
    );

    return "₹" + total.toLocaleString();
  };

  const numberOfExpenses = () => {
    return expenseData.length;
  };

  return (
    <div className="px-8 mt-6">
      <div className="grid md:grid-cols-3 gap-6">
        <SummaryCard text={"TOTAL SPENDING"} info={totalSpending()} />
        <SummaryCard
          text={"SPENDING THIS MONTH"}
          info={currentMonthSpending()}
        />
        <SummaryCard text={"NUMBER OF EXPENSES"} info={numberOfExpenses()} />
      </div>
      <div className="flex gap-6 mt-5 md:flex-row flex-col   ">
        <ExpenseForm />
        <div className="px-4 py-4 md:px-8 md:py-5  rounded-4xl  dark:bg-[#14141A] dark:border-gray-800 bg-[#FFFFFF] border border-gray-200 shadow-md  h-120 overflow-y-auto scrollbar-none">
          <h1 className="text-4xl font-bold mb-3 dark:text-white text-[#18181B] ">
            Recent <span className="text-red-500">Expenses</span>
          </h1>
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}
