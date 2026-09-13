import Search from "./SearchAndFilter";
import List from "./List";
export default function ExpenseList() {
  return (
    <>
      <div className=" px-4 py-4 md:px-8 md:py-5 md:w-3/5  bg-[#14141A] rounded-4xl border border-gray-800">
        <h1 className="text-4xl font-bold mb-3 text-white">
          Recent <span className="text-red-400">Expenses</span>
        </h1>

        <Search />
        <List />
      </div>
    </>
  );
}
