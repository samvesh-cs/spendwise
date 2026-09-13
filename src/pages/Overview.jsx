import { useContext } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";
import { ExpenseDataContext } from "../context/ExpenseDataContext";

export default function Overview() {
  const { expenseData, setExpenseData } = useContext(ExpenseDataContext);
  console.log(expenseData);

  const totalSpending = () => {
    let total = 0;
    if (expenseData.length == 0) {
      return "₹" + 0;
    }
    expenseData.map((expense) => (total = total + Number(expense.amount)));
    return "₹" + total.toLocaleString();
  };

  const currentMonthSpending = () => {
    let total = 0;
    const currentMonth = new Date().getMonth() + 1;
    console.log(currentMonth);

    const currentMonthExpenses = expenseData.filter((expense) => {
      const dateArray = expense.date.split("-");
      const expenseMonth = Number(dateArray[1]);
      return expenseMonth === currentMonth;
    });
    if (currentMonthExpenses.length == 0) {
      return "₹" + 0;
    }
    currentMonthExpenses.map(
      (expense) => (total = total + Number(expense.amount)),
    );

    return "₹" + total.toLocaleString();
  };

  const numberOfExpenses = () => {
    return expenseData.length;
  };

  return (
    <>
      <div>
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
          <ExpenseList />
        </div>
      </div>
    </>
  );
}
