export default function ToastExpense({ onClose }) {
  return (
    <div
      className="bg-white dark:bg-[#14141A]
  border border-zinc-200 dark:border-[#2A2A32]  text-zinc-900 dark:text-zinc-100 p-6 w-90 fixed top-20 right-5 z-999 shadow-md shadow-red-600/10 rounded-xl"
      style={{ animation: "slideIn 0.3s ease-out" }}
    >
      <div className="flex items-center">
        <div className="bg-red-500/50 border border-red-500 h-10 w-10 rounded-full flex items-center justify-center p-4 text-3xl mr-3 ">
          <i className="ri-check-fill"></i>
        </div>
        <h1 className="text-xl">New Expense Added</h1>
        <button className="text-red-500 text-4xl ml-auto " onClick={onClose}>
          <i className="ri-close-fill"></i>
        </button>
      </div>
    </div>
  );
}
