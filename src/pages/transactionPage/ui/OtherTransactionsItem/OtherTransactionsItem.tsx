import { Link } from "react-router-dom";
import { Transaction } from "../../../../types/globalTypes";
import { timeConverter } from "../../../../helpers/unixTimeConverter";
import { convertAmount } from "../../../../helpers/convertAmount";

export const OtherTransactionsItem = (props: {
   transaction: Transaction;
   category: string;
}) => {
   return (
      <Link to={`/transactions/${props.transaction.id}`}>
         <div className="flex items-center justify-between gap-4">
            <div className="flex gap-5 items-center">
               <div
                  className={`bg-category-${props.category} rounded-full w-10 h-10`}
               ></div>
               <p className="text-xl font-medium">
                  {convertAmount(props.transaction.amount).toLocaleString()} ₴
               </p>
            </div>
            <p className="text-gray-500 font-medium justify-self-end">
               {timeConverter(props.transaction.time).day}
               {", "}
               {timeConverter(props.transaction.time).time}
            </p>
         </div>
      </Link>
   );
};
