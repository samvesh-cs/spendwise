import { useState } from "react";

export default function ExpenseForm({ expenses, setExpenses }) {
  const [expense, setExpense] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
    payment: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const newExpense = { ...expense, [name]: value };
    setExpense(newExpense);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newExpenses = [...expenses, expense];
    setExpenses(newExpenses);
  }
  console.log(expense);
  console.log(expenses);

  return (
    <div className="flex justify-center align-center ">
      <form
        className="flex flex-col  px-10 py-5 w-[50%] bg-[#14141A] rounded-xl border border-gray-800"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="text-4xl font-bold mb-2">Add Expenses</h1>
        <label className="text-sm mb-1" htmlFor="amount">
          AMOUNT
        </label>
        <input
          className=" outline-2 outline-gray-800 focus:outline-[#ef4444] h-12 px-4 py-2 rounded-full mb-3"
          type="number"
          name="amount"
          min={0}
          placeholder="0.00"
          onChange={(e) => handleChange(e)}
          required
        />

        <label className="text-sm mb-1" htmlFor="description">
          DESCRIPTION
        </label>
        <textarea
          className="outline-2 outline-gray-800 focus:outline-[#ef4444] h-12 px-4 py-2 rounded-full mb-3"
          name="description"
          placeholder="What Did You Spend On?"
          onChange={(e) => handleChange(e)}
        ></textarea>

        <label className="text-sm mb-1" htmlFor="category">
          CATEGORY{" "}
        </label>
        <select
          className=" outline-2 outline-gray-800 focus:outline-[#ef4444] h-12 px-4 py-2 rounded-full mb-3 appearance-none"
          name="category"
          onChange={(e) => handleChange(e)}
          required
        >
          <option value="Housing & Rent">Housing & Rent</option>
          <option value="Groceries & Food">Groceries & Food</option>
          <option value="Dining Out & Delivery">Dining Out & Delivery</option>
          <option value="Bills & Utilities">Bills & Utilities</option>
          <option value="Travel & Transport">Travel & Transport</option>
          <option value="Shopping & Lifestyle">Shopping & Lifestyle</option>
          <option value="Investment & Debt">Investment & Debt</option>
          <option value="Miscellaneous / Others">Miscellaneous / Others</option>
        </select>

        <div className="flex align-center gap-5">
          <div className="flex flex-col w-[50%]">
            <label className="text-sm mb-1" htmlFor="date">
              DATE
            </label>
            <input
              required
          className="outline-2 outline-gray-800 focus:outline-[#ef4444] h-12 px-4 py-2 rounded-full mb-3 appearance-none"
              type="date"
              name="date"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-col  w-[50%]">
            <label className="text-sm mb-1" htmlFor="payment">
              PAYMENT METHOD
            </label>
            <select
              required
          className=" outline-2 outline-gray-800 focus:outline-[#ef4444] h-12 px-4 py-2 rounded-full mb-3 appearance-none"
              name="payment"
              onChange={(e) => handleChange(e)}
            >
              <option value="UPI / QR Code">UPI / QR Code</option>
              <option value="Cash">Cash</option>
              <option value="Credit / Debit Card">Credit / Debit Card</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="border border-gray-800  bg-[#ef4444] hover:bg-[#f25f5f] text-white font-semibold outline-none h-12 px-4 py-2 rounded-full mt-4 transition-all duration-200"
        > <i className="ri-add-fill text-xl"></i> ADD EXPENSE
        </button>
      </form>
    </div>
  );
}
