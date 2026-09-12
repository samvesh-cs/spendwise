import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";

export default function Overview() {
  return (
    <>
      <div className=" px-10 ">
        <div className="grid grid-cols-3 place-items-center">
          <SummaryCard />
          <SummaryCard />
          <SummaryCard />
        </div>
        <div className="flex items-center justify-center mt-5">
          <ExpenseForm />
          <ExpenseList />
        </div>
      </div>
    </>
  );
}
