import { useContext, useState } from "react";
import { ExpenseDataContext } from "../context/ExpenseDataContext";
import EditingForm from "./EditingForm";

export default function List({ data }) {
  console.log(data);
  const { expenseData, setExpenseData } = useContext(ExpenseDataContext);
  const [editingExpense, setEditingExpense] = useState(null);

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
      case "other":
        return <i className="ri-puzzle-2-fill"></i>;
    }
  };

  const handleEdit = (id) => {
    const expense = expenseData.find((expense) => expense.id === id);
    setEditingExpense(expense);
  };

  const handleDelete = (id) => {
    const newExpenseData = expenseData.filter((expense) => expense.id !== id);
    setExpenseData(newExpenseData);
  };

  const ActionButtons = () => {
    return (
      <div className="flex gap-3  text-black dark:text-white text-2xl">
        <button onClick={() => handleEdit(expense.id)}>
          <i className="ri-pencil-fill "></i>
        </button>
        <button onClick={() => handleDelete(expense.id)}>
          <i className="ri-delete-bin-5-line"></i>
        </button>
      </div>
    );
  };

  const ListRows = ({ data }) => {
    if (data.length === 0) {
      return (
        <div className="flex justify-center items-center mt-25 dark: ">
          <h1 className="text-4xl font-semibold dark:text-gray-500">
            No Expenses
          </h1>
        </div>
      );
    }
    const formatExpenseDate = (date) => {
      const formattedDate = new Date(date);

      return formattedDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
      });
    };

    return data.map((expense) => (
      <div
        key={expense.id}
        className="text-black dark:text-white dark:bg-[#0B0B0E] bg-[#F5F5F7] p-3  md:flex items-center justify-between rounded-2xl md:rounded-full mb-3 shadow-md"
      >
        <section className="flex items-center">
          <div className="bg-red-500/50 border border-red-500 h-10 w-10 rounded-full  flex items-center justify-center p-4 text-xl mr-3 ">
            {Icon(expense.category)}
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">{expense.description}</h1>
            <div className="flex gap-2">
              <p>{expense.category}</p>
              <p>{formatExpenseDate(expense.date)}</p>
            </div>
          </div>
        </section>
        <section className="flex items-center">
          <p className=" mr-auto md:mr-4 text-2xl md:text-xl font-bold text-red-500 ">
            ₹{expense.amount.toLocaleString()}
          </p>
          <div className="md:rounded-r-[30px] md:rounded-l-xl rounded-2xl p-2 border bg-red-600/20 border-red-500 dark:bg-red-500/30 dark:border-red-500">
            <ActionButtons />
          </div>
        </section>
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

      <ListRows data={data} />
    </>
  );
}
