import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useGlobalStore } from "../../../../globalStore/store";
import { CustomEditIcon } from "../../ui";
import { capitalizeString } from "../../../../helpers/capitalizeString";
import { Transaction } from "../../../../types/globalTypes";

export const CategorySelector = (props: {
   category: string;
   transaction: Transaction;
   setCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
   const categories = useGlobalStore((state) => state.categories);
   const changeTransactionCategory = useGlobalStore(
      (state) => state.changeTransactionCategory
   );
   const handleChange = (event: SelectChangeEvent) => {
      props.setCategory(event.target.value);
      changeTransactionCategory(props.transaction, event.target.value);
   };
   return (
      <div className="border-b-2 border-gray-600 mb-12">
         <div className="translate-y-1/2 px-4 bg-gray-700 inline-block cursor-pointer">
            <Select
               className={`bg-category-${props.category} px-2 flex items-center relative`}
               sx={{
                  borderRadius: "18px",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#ffffff",
               }}
               value={props.category}
               onChange={handleChange}
               IconComponent={CustomEditIcon}
            >
               {Object.keys(categories!).map((category: string) => (
                  <MenuItem value={category}>
                     {capitalizeString(category)}
                  </MenuItem>
               ))}
               <MenuItem value="other">Other</MenuItem>
            </Select>
         </div>
      </div>
   );
};
