import { IconSvgSelector } from "../../../../assets/icons/IconSvgSelector";
import { convertAmount } from "../../../../helpers/convertAmount";

export const CreditCardsItem = (props: {
   cardInfo?: any;
   balance: number;
   color: string;
}) => {
   const balance = convertAmount(props.balance);
   return (
      <div
         className={`rounded-lg ${
            props.color === "black"
               ? "bg-gradient-to-tl from-black via-slate-900 to-indigo-800"
               : "bg-gradient-to-br from-green-200 via-teal-300 to-sky-400"
         }`}
      >
         <div
            className={`p-6 flex justify-between items-start ${
               props.color === "black" ? "" : "text-black"
            }`}
         >
            <div>
               <h4 className="text-3xl font-bold mb-7">monobank</h4>
               <p
                  className={`text-2xl font-semibold ${
                     props.color === "black" ? "text-gray-500" : "text-black"
                  }`}
               >
                  1234 5678 9123 4560
               </p>
            </div>
            <IconSvgSelector
               classname="scale-150 -translate-x-2 translate-y-2"
               icon="dashboard-mastercard"
            />
         </div>
         <div className="p-6 rounded-b-lg">
            <div className="flex justify-between">
               <p className="flex flex-col gap-2 uppercase">
                  <span
                     className={`text-sm font-semibold ${
                        props.color === "black" ? "text-gray-500" : "text-black"
                     }`}
                  >
                     Total Balance
                  </span>
                  <span
                     className={`text-lg font-semibold ${
                        props.color === "black" ? "" : "text-black"
                     }`}
                  >
                     {balance.toLocaleString()} UAH
                  </span>
               </p>
               <p className="flex flex-col gap-2 uppercase">
                  <span
                     className={`text-sm font-semibold ${
                        props.color === "black" ? "text-gray-500" : "text-black"
                     }`}
                  >
                     Exp. Date
                  </span>
                  <span
                     className={`text-lg font-semibold ${
                        props.color === "black" ? "" : "text-black"
                     }`}
                  >
                     04 / 24
                  </span>
               </p>
            </div>
         </div>
      </div>
   );
};
