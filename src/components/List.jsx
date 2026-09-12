import { useContext } from "react";
import { ExpenseDataContext } from "../context/ExpenseDataContext";

export default function List() {
  const { expenseData, setExpenseData } = useContext(ExpenseDataContext);
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
    console.log(id);
  };

  const handleDelete = (id) => {
    const newExpenseData = expenseData.filter((expense) => expense.id !== id);
    setExpenseData(newExpenseData);
  };

  const ListRows = () => {
    if (!expenseData) {
      return <h1>No Expenses</h1>;
    }
    return expenseData.map((expense) => (
      <div
        key={expenseData.id}
        className="grid grid-cols-[2fr_1fr_1fr_1fr_0.6fr] text-white font-medium py-2"
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
      <ListHeader />
      <div className="border-t-2 border-gray-400/10"></div>
      <ListRows />

      {}
    </>
  );
}
