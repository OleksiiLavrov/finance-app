import { Link } from "react-router-dom";
import { Transaction } from "./Transaction/Transaction";

export const Transactions = () => {
  return (
    <div className="bg-gray-800 rounded-lg px-10 py-6 w-full">
      <div className="flex justify-between items-center mb-7">
        <h3 className="text-3xl font-semibold">Recent Transactions</h3>
        <Link
          to="/transactions"
          className="text-yellow-400 text-lg font-regular duration-300 hover:text-yellow-500 hover:duration-300"
        >
          See all
        </Link>
      </div>
      <ul>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </ul>
    </div>
  );
};