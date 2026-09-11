import { Route ,Routes } from "react-router";
import ExpenseForm from "./components/ExpenseForm";
// import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Overview from "./pages/Overview";
import AddExpense from "./pages/AddExpense";
import Transactions from "./pages/Transactions";

function App() {
  

  const [expenses, setExpenses] = useState([]);
  return (
    <>
    
    <div className="w-full h-screen">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Overview/>}/>
        <Route path="/addexpense" element={<AddExpense/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
      </Routes>
     
      {/* <ExpenseList /> */}
    </div>
    </>
  );
}

export default App;
