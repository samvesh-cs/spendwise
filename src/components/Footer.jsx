import React from "react";
import { Link } from "react-router";
export default function Footer() {
  return (
    <div className=" dark:bg-[#171117] w-full bg-[#FFFFFF] dark:text-white flex justify-between px-8 py-8  items-center mb-5 border-b dark:border-gray-800 border-gray-200 relative ">
      <div>
        <h1 className="font-bold text-xl flex  ">
          <div className="dark:bg-red-500 bg-red-500 px-2 aspect-sqaure rounded-full flex items-center justify-center p-1 mr-1 shadow-md ">
            <i className="ri-wallet-3-fill text-xl "></i>
          </div>
          Spend<span className="text-red-500">Wise</span>
        </h1>
      </div>

      <div className="md:flex gap-10 text-base text-gray-500 hidden absolute top-[50%] left-[50%] transform translate-[-50%]">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/overview">
          <h1>Overview</h1>
        </Link>
        <Link to="/addexpense">
          <h1>Add Expense</h1>
        </Link>
        <Link to="/transactions">
          <h1>Transactions</h1>
        </Link>
      </div>
      <p className="text-base text-gray-500">2026 SpendWise. All rights reserved.</p>
    </div>
  );
}
