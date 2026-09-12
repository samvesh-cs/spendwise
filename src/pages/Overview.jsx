import { useContext } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";
import { ExpenseDataContext } from "../context/ExpenseDataContext";

export default function Overview() {
  const { expenseData, setExpenseData } = useContext(ExpenseDataContext);
  console.log(expenseData);

  return (
    <>
      <div>
        <div className="grid md:grid-cols-3 gap-6">
          <SummaryCard />
          <SummaryCard />
          <SummaryCard />
        </div>
        <div className="flex gap-6 mt-5 md:flex-row flex-col   ">
          <ExpenseForm />
          <ExpenseList />
        </div>
      </div>
    </>
  );
}
