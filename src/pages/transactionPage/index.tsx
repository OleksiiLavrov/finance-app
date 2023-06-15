import "./styles/index.css";
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
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { CategorySelector, OtherTransactions } from "./components";

export const CustomEditIcon = () => {
   return <EditIcon style={{ fill: "#ffffff" }} />;
};

export const TransactionPage = () => {
   const { transactionId } = useParams();
   const transaction = useGlobalStore((state) =>
      state.getTransactionById(transactionId!)
   );
   const [category, setCategory] = useState<string>(transaction.category!);
   const { time, day } = timeConverter(transaction.time);

   return (
      <>
         <PageTitle title={`Transaction - #${transaction.id}`} />
         <div className="bg-gray-700 py-10 pl-10 pr-14 text-center">
            <h1 className="text-3xl font-regular mb-6">
               {transaction.description}
            </h1>
            <CategorySelector
               category={category}
               setCategory={setCategory}
               transaction={transaction}
            />
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
                        className={`bg-category-${category} rounded-full p-2`}
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
                        className={`bg-category-${category} rounded-full p-2`}
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
               <OtherTransactions
                  category={category}
                  transaction={transaction}
               />
            </div>
         </div>
      </>
   );
};
