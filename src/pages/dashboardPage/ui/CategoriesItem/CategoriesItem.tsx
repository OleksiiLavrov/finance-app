import { IconSvgSelector } from "../../../../assets/icons/IconSvgSelector";
import { capitalizeString } from "../../../../helpers/capitalizeString";

export const CategoriesItem = (props: {
   iconName: string;
   spent: number;
   total: number;
}) => {
   return (
      <li className="flex gap-6">
         <div className="p-2 rounded-lg bg-gray-600 flex justify-center items-center">
            <IconSvgSelector
               classname="w-8 h-8 fill-yellow-400"
               icon={`dashboard-${props.iconName}`}
            />
         </div>
         <div className="flex flex-col justify-between w-full">
            <p className="flex justify-between text-xl font-semibold">
               <span data-testid="category-title">
                  {capitalizeString(props.iconName)}
               </span>
               <span data-testid="category-amount">
                  {`₴${props.spent.toLocaleString()} `}
                  <span className="text-gray-400">
                     / ₴{props.total.toLocaleString()}
                  </span>
               </span>
            </p>
            <div className="h-3 w-full rounded-md bg-gray-700 relative">
               <div
                  data-testid="category-bar"
                  style={{ width: `${(props.spent / props.total) * 100}%` }}
                  className="absolute top-0 left-0 bottom-0 bg-yellow-400 rounded-md"
               ></div>
            </div>
         </div>
      </li>
   );
};
