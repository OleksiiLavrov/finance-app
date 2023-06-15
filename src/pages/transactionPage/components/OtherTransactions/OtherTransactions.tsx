import { useGlobalStore } from "../../../../globalStore/store";
import { Transaction } from "../../../../types/globalTypes";
import { OtherTransactionsItem } from "../../ui/OtherTransactionsItem/OtherTransactionsItem";

export const OtherTransactions = (props: {
   transaction: Transaction;
   category: string;
}) => {
   const getTransactionsByDescr = useGlobalStore(
      (state) => state.getTransactionsByDescr
   );
   console.log(getTransactionsByDescr(props.transaction.description));

   return (
      <ul className="flex flex-col items-start">
         {getTransactionsByDescr(props.transaction.description).map(
            (item: Transaction, index: number) => {
               if (
                  item.id !== props.transaction.id &&
                  item.amount < 0 &&
                  index < 7
               ) {
                  return (
                     <li
                        key={props.transaction.id}
                        className="w-full duration-300 hover:bg-gray-900 px-5 py-2 rounded-lg"
                     >
                        <OtherTransactionsItem
                           transaction={item}
                           category={props.category}
                        />
                     </li>
                  );
               }
            }
         )}
      </ul>
   );
};
