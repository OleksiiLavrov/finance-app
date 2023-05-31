import { IconSvgSelector } from "../../../../assets/icons/IconSvgSelector";
import { convertAmount } from "../../../../helpers/convertAmount";

export const TabsItem = (props: { tabItem: string; amount: number }) => {
   const convertedAmount = convertAmount(props.amount);
   return (
      <div
         className="rounded-lg bg-gray-800 py-6 pl-6 pr-9 flex justify-between items-end gap-6
       transition-all duration-300 hover:scale-105 hover:duration-300 hover:shadow-xl"
      >
         <div className="w-12 h-12 rounded-lg bg-gray-600 flex justify-center items-center">
            <IconSvgSelector
               classname="w-8 h-8 fill-yellow-400"
               icon={`dashboard-${props.tabItem.toLowerCase()}`}
            />
         </div>
         <div className="flex flex-col gap-2">
            <span data-testid="tab-title" className="text-gray-400">
               {props.tabItem}
            </span>
            <span data-testid="tab-amount" className="text-3xl font-semibold">
               {convertedAmount.toLocaleString()}₴
            </span>
         </div>
      </div>
   );
};
