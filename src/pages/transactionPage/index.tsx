import { useParams } from "react-router";
import { useGlobalStore } from "../../globalStore/store";
import { PageTitle } from "../../ui";
import { capitalizeString } from "../../helpers/capitalizeString";
import { convertAmount } from "../../helpers/convertAmount";
import { timeConverter } from "../../helpers/unixTimeConverter";
import { IconSvgSelector } from "../../assets/icons/IconSvgSelector";
import { Transaction } from "../../types/globalTypes";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

export const TransactionPage = () => {
   const { transactionId } = useParams();
   const categories = useGlobalStore((state) => state.categories);
   const transaction = useGlobalStore((state) =>
      state.getTransactionById(transactionId!)
   );
   const getTransactionsByDescr = useGlobalStore(
      (state) => state.getTransactionsByDescr
   );
   const changeTransactionCategory = useGlobalStore(
      (state) => state.changeTransactionCategory
   );
   const clickHandler = () => {};
   const { time, day } = timeConverter(transaction.time);
   return (
      <>
         <PageTitle title={`Transaction - #${transaction.id}`} />
         <div className="bg-gray-700 py-10 pl-10 pr-14 text-center">
            <h1 className="text-3xl font-regular mb-6">
               {transaction.description}
            </h1>
            <div className="border-b-2 border-gray-600 mb-10">
               <div className="translate-y-1/2 px-4 bg-gray-700 inline-block cursor-pointer">
                  <p
                     className={`bg-category-${transaction.category} rounded-2xl py-2 px-6 text-xl flex items-center gap-5 relative`}
                  >
                     <span>{capitalizeString(transaction.category!)}</span>
                     <EditIcon />
                     {/* <ul
                        className="text-center text-xl bg-gray-900 absolute left-0 right-0 top-0"
                        defaultValue={transaction.category}
                        onClick={clickHandler}
                     >
                        {Object.keys(categories!).map((category: string) => (
                           <li>{capitalizeString(category)}</li>
                        ))}
                     </ul> */}
                  </p>
               </div>
            </div>
            <div className="bg-gray-800 rounded-3xl text-center py-4 px-6 max-w-md mx-auto">
               <p className="text-gray-500 mb-8 font-medium">
                  {day}, {time}
               </p>
               <p className="font-semibold text-5xl mb-8">
                  {convertAmount(transaction.amount).toLocaleString()} ₴
               </p>
               <div className="flex items-center justify-center gap-10 mb-10">
                  <div className="flex gap-4 items-center">
                     <div
                        className={`bg-category-${transaction.category} rounded-full p-2`}
                     >
                        <IconSvgSelector
                           icon="dashboard-balance"
                           classname="w-6 h-6 fill-white"
                        />
                     </div>
                     <div className="flex flex-col items-start gap-1">
                        <span className="text-lg text-gray-500 font-medium">
                           Balance
                        </span>
                        <span className="text-2xl font-medium">
                           {`${convertAmount(
                              transaction.balance
                           ).toLocaleString()} ₴`}
                        </span>
                     </div>
                  </div>
                  <div className="bg-gray-600 w-0.5 h-16"></div>
                  <div className="flex gap-4 items-center">
                     <div
                        className={`bg-category-${transaction.category} rounded-full p-2`}
                     >
                        <IconSvgSelector
                           icon="cashback"
                           classname="w-6 h-6 fill-white"
                        />
                     </div>
                     <div className="flex flex-col items-start gap-1">
                        <span className="text-lg text-gray-500 font-medium">
                           Cashback
                        </span>
                        <span className="text-2xl font-medium">
                           {`${convertAmount(
                              transaction.cashbackAmount
                           ).toLocaleString()} ₴`}
                        </span>
                     </div>
                  </div>
               </div>
               <ul className="flex flex-col items-start">
                  {getTransactionsByDescr(transaction.description).map(
                     (item: Transaction, index: number) => {
                        if (
                           item.id !== transaction.id &&
                           item.amount < 0 &&
                           index < 7
                        ) {
                           return (
                              <li
                                 key={item.id}
                                 className="w-full duration-300 hover:bg-gray-900 px-5 py-2 rounded-lg"
                              >
                                 <Link to={`/transactions/${item.id}`}>
                                    <div className="flex items-center justify-between gap-4">
                                       <div className="flex gap-5 items-center">
                                          <div
                                             className={`bg-category-${item.category} rounded-full w-10 h-10`}
                                          ></div>
                                          <p className="text-xl font-medium">
                                             {convertAmount(
                                                item.amount
                                             ).toLocaleString()}{" "}
                                             ₴
                                          </p>
                                       </div>
                                       <p className="text-gray-500 font-medium justify-self-end">
                                          {timeConverter(item.time).day}
                                          {", "}
                                          {timeConverter(item.time).time}
                                       </p>
                                    </div>
                                 </Link>
                              </li>
                           );
                        }
                     }
                  )}
               </ul>
            </div>
         </div>
      </>
   );
};
