export default function ExpenseList({ data, setData }) {

  return (
    <>
      <div className="w-3/5 px-10 py-5  bg-[#14141A] rounded-xl border border-gray-800">
        <h1 className="text-4xl font-bold mb-3 text-white">
          Recent <span className="text-red-400">Expenses</span>
        </h1>

        <div className="flex gap-5">
          <div className="flex items-center outline-2 bg-[#0B0B0E] outline-gray-800 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-3">
            <i className="ri-search-line mr-1 text-xl"></i>
            <input
              type="text"
              name="amount"
              min={0}
              placeholder="Search Expense"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <select
            className=" outline-2 outline-gray-800 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-3"
            name="category"
            placeholder="All Categories"
            onChange={(e) => handleChange(e)}
          >
            <option value="Housing & Rent">Housing & Rent</option>
            <option value="Groceries & Food">Groceries & Food</option>
            <option value="Dining Out & Delivery">Dining Out & Delivery</option>
            <option value="Bills & Utilities">Bills & Utilities</option>
            <option value="Travel & Transport">Travel & Transport</option>
            <option value="Shopping & Lifestyle">Shopping & Lifestyle</option>
            <option value="Investment & Debt">Investment & Debt</option>
            <option value="Miscellaneous / Others">
              Miscellaneous / Others
            </option>
          </select>

          <input
            required
            className="outline-2 outline-gray-800 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-3 appearance-none"
            type="date"
            name="date"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <h1></h1>
        </div>
      </div>
    </>
  );
}
