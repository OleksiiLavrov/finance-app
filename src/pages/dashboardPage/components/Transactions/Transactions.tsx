import { Link } from "react-router-dom";
import { TransactionsItem } from "../../ui";
import { useGlobalStore } from "../../../../globalStore/store";
import { Transaction } from "../../../../types/globalTypes";

export const Transactions = () => {
   const transactions = useGlobalStore((state) => state.transactions);
   return (
      <div className="bg-gray-800 rounded-lg py-6 w-full">
         <div className="flex justify-between items-center mb-7 px-10">
            <h3 className="text-2xl font-semibold">Recent Transactions</h3>
            <Link
               to="/transactions"
               className="text-yellow-400 text-lg font-regular duration-300 hover:text-yellow-500 hover:duration-300"
            >
               See all
            </Link>
         </div>
         <ul>
            {transactions.map((transaction: Transaction, id: number) => {
               if (id < 8)
                  return (
                     <li key={transaction.id}>
                        <Link to={`/transactions/${transaction.id}`}>
                           <TransactionsItem transaction={transaction} />
                        </Link>
                     </li>
                  );
            })}
         </ul>
      </div>
   );
};
