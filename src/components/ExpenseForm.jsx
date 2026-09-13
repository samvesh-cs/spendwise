import { useContext, useState } from "react";
import { ExpenseDataContext } from "../context/ExpenseDataContext";
export default function ExpenseForm() {
  const initialExpense = {
    id: "",
    description: "",
    amount: "",
    category: "",
    date: "",
    payment: "",
  };
  const { expenseData, setExpenseData } = useContext(ExpenseDataContext);
  const [expense, setExpense] = useState(initialExpense);
  console.log(expenseData);

  function handleChange(e) {
    const { name, value } = e.target;
    const newExpense = { ...expense, [name]: value };
    setExpense(newExpense);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newExpense = { ...expense, id: Date.now() };
    const newExpenses = [...expenseData, newExpense];
    setExpenseData(newExpenses);
    setExpense(initialExpense);
  }

  console.log(expense);
  return (
    <div className="grid grid-cols-1  px-8 py-5 md:w-2/5 rounded-4xl dark:bg-[#14141A] dark:border-gray-800 bg-[#FFFFFF] border border-gray-200 grow shadow-md">
      <form
        className="flex flex-col w-full"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="text-4xl font-bold mb-4 dark:text-white text-[#18181B] ">
          Add <span className="text-red-500">Expenses</span>
        </h1>
        <label
          className="text-sm mb-1 text-[#18181B] dark:text-white"
          htmlFor="amount"
        >
          AMOUNT
        </label>

        <div className="flex items-center outline-2 dark:bg-[#0B0B0E] dark:outline-gray-800 outline-gray-400 text-red-400 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-4">
          <i className="ri-money-rupee-circle-line text-red-500  mr-2 text-xl"></i>
          <input
            className="outline-none w-full"
            type="number"
            name="amount"
            min={0}
            value={expense.amount}
            placeholder="0.00"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <label
          className="text-sm mb-1 text-[#18181B] dark:text-white"
          htmlFor="description"
        >
          DESCRIPTION
        </label>
        <textarea
          className="outline-2 dark:bg-[#0B0B0E] dark:outline-gray-800 outline-gray-400 text-red-400 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-4 overflow-hidden"
          name="description"
          value={expense.description}
          placeholder="What Did You Spend On?"
          onChange={(e) => handleChange(e)}
        ></textarea>

        <label
          className="text-sm mb-1 text-[#18181B] dark:text-white"
          htmlFor="category"
        >
          CATEGORY
        </label>
        <select
          className=" outline-2 dark:bg-[#0B0B0E] dark:outline-gray-800 outline-gray-400 text-red-400 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-4 appearance-none"
          value={expense.category}
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

        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
          <div className="flex flex-col md:w-[50%] ">
            <label
              className="text-sm mb-1 text-[#18181B] dark:text-white"
              htmlFor="date"
            >
              DATE
            </label>
            <input
              required
              className="outline-2 dark:bg-[#0B0B0E] dark:outline-gray-800 outline-gray-400 text-red-400 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-4 appearance-none"
              value={expense.date}
              type="date"
              name="date"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex flex-col  md:w-[50%]">
            <label
              className="text-sm mb-1 text-[#18181B] dark:text-white"
              htmlFor="payment"
            >
              PAYMENT METHOD
            </label>
            <select
              required
              className=" outline-2 dark:bg-[#0B0B0E] dark:outline-gray-800 outline-gray-400 text-red-400 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-4 appearance-none"
              name="payment"
              value={expense.payment}
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select Payment Type</option>
              <option value="UPI / QR Code">UPI / QR Code</option>
              <option value="Cash">Cash</option>
              <option value="Credit / Debit Card">Credit / Debit Card</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="border border-gray-400 dark:border-gray-800 bg-red-500 hover:bg-red-500/80 text-white font-semibold outline-none h-12 px-4 py-2 rounded-full mt-4 transition-all duration-200"
        >
          <i className="ri-add-fill text-xl"></i> ADD EXPENSE
        </button>
      </form>
    </div>
  );
}
