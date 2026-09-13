import { useContext, useState } from "react";
import { ExpenseDataContext } from "../context/ExpenseDataContext";
import EditingForm from "./EditingForm";

export default function List() {
  const { expenseData, setExpenseData } = useContext(ExpenseDataContext);
  const [query, setQuery] = useState("");
  const [editingExpense, setEditingExpense] = useState(null);
  const ListHeader = () => {
    return (
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.6fr]  text-gray-400 font-semibold pb-2 text-xs ">
        <div>EXPENSE NAME</div>
        <div>AMOUNT</div>
        <div> CATEGORY</div>
        <div>DATE</div>
        <div>ACTIONS</div>
      </div>
    );
  };

  const Icon = (category) => {
    category = category.toLowerCase();
    switch (category) {
      case "food":
        return <i className="ri-restaurant-line "></i>;
      case "transport":
        return <i className="ri-bus-line "></i>;
      case "bills":
        return <i className="ri-receipt-fill "></i>;
      case "shopping":
        return <i className="ri-shopping-cart-2-fill"></i>;
      case "entertainment":
        return <i className="ri-tv-2-line"></i>;
      case "education":
        return <i className="ri-graduation-cap-fill"></i>;
      case "others":
        return <i className="ri-puzzle-2-fill"></i>;
    }
  };

  const handleEdit = (id) => {
    expenseData.map((expense) => {
      if (expense.id == id) {
        console.log(id);
        setEditingExpense({
          id: expense.id,
          description: expense.description,
          amount: expense.amount,
          category: expense.category,
          date: expense.date,
          payment: expense.payment,
        });
      }
    });
    console.log(editingExpense);
  };

  const handleDelete = (id) => {
    const newExpenseData = expenseData.filter((expense) => expense.id !== id);
    setExpenseData(newExpenseData);
  };

  const search = (query) => {
    query = query.toLowerCase();
    return expenseData.filter(
      (expense) =>
        expense.description.toLowerCase().includes(query) ||
        expense.category.toLowerCase().includes(query) ||
        expense.date.toLowerCase().includes(query),
    );
  };

  const ListRows = ({ data }) => {
    if (expenseData.length === 0) {
      return (
        <div className="flex justify-center items-center mt-25  ">
          <h1 className="text-4xl font-semibold">No Expenses</h1>
        </div>
      );
    }

    return data.map((expense) => (
      <div
        key={expense.id}
        className="grid md:grid-cols-[2fr_1fr_1fr_1fr_0.6fr] grid-cols-[1fr_0.5fr_0.5fr_0.5fr_0.3fr]  text-white font-medium py-2 overflow-y-auto max-h-100"
      >
        <div className="flex gap-2 items-center capitalize">
          <div className="bg-red-500/50 border border-red-500 h-8 rounded-full w-8 flex items-center justify-center p-4 text-xl ">
            {Icon(expense.category)}
          </div>
          {expense.description}
        </div>
        <div>₹ {expense.amount} </div>
        <div> {expense.category} </div>
        <div> {expense.date} </div>
        <div>
          <div className="flex gap-2 text-gray-400 text-2xl">
            <button onClick={() => handleEdit(expense.id)}>
              <i className="ri-pencil-fill "></i>
            </button>
            <button onClick={() => handleDelete(expense.id)}>
              <i className="ri-delete-bin-5-line"></i>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      {editingExpense && (
        <div className="fixed inset-0 z-40 flex items-center justify-center pt-10 lg:px-90 px-20 bg-red-400/50 h-full ">
          <EditingForm
            editingExpense={editingExpense}
            setEditingExpense={setEditingExpense}
          />
        </div>
      )}
      {/* search and filter */}
      <div className="md:grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="flex items-center outline-2 bg-[#0B0B0E] outline-gray-800 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-3  overflow-hidden">
          <i className="ri-search-line mr-1 text-xl"></i>
          <input
            className="outline-none"
            type="text"
            name="amount"
            min={0}
            placeholder="Search Expense"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <select
          className=" outline-2 outline-gray-800 focus:outline-red-400 h-10 px-4 py-2 rounded-full mb-3 appearance-none"
          name="category"
          onChange={(e) => setQuery(e.target.value)}
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
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {/* List  */}
      <div>
        <ListHeader />
        <div className="border-t-2 border-gray-400/10"></div>
        <div className="h-80 overflow-y-auto">
          <ListRows data={search(query)} />
        </div>
      </div>
    </>
  );
}
