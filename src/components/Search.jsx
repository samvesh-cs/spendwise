export default function Search() {
  return (
    <div className="md:grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="flex items-center outline-2 bg-[#0B0B0E] outline-gray-800 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-3  overflow-hidden">
        <i className="ri-search-line mr-1 text-xl"></i>
        <input
          className="outline-none"
          type="text"
          name="amount"
          min={0}
          placeholder="Search Expense"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <select
        className=" outline-2 outline-gray-800 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-3 appearance-none"
        name="category"
        onChange={(e) => handleChange(e)}
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills & Utilities</option>
        <option value="Shopping">Shopping</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Education">Education</option>
        <option value="Other">Other</option>
      </select>

      <input
        required
        className="outline-2 outline-gray-800 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-3 appearance-none"
        type="date"
        name="date"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
