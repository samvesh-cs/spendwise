import ExpenseList from "../components/ExpenseList";
import List from "../components/List";
import Search from "../components/Search";

export default function Transactions() {
  return (
    <div className="flex-1">
      <div className=" px-8 py-5 h-full  rounded-4xl bg-[#14141A] border border-gray-800 grow">
        <h1 className="text-4xl font-bold mb-3 text-white">
          All <span className="text-red-400">Expenses</span>
        </h1>
        <Search />
        <List />
      </div>
    </div>
  );
}
