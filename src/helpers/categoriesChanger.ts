import { Categories, Transaction } from "../types/globalTypes";

export const categoriesChanger = (
   transaction: Transaction,
   newCategory: string,
   allCategories: Categories
) => {
   let categoryDescr: string;

   const updatedCategoryValue = allCategories[transaction.category!].filter(
      (descr: string) => {
         if (transaction.description.includes(descr)) {
            categoryDescr = descr;
         } else {
            return descr;
         }
      }
   );
   return {
      ...allCategories,
      [transaction.category!]: updatedCategoryValue,
      [newCategory]: [...allCategories[newCategory], categoryDescr!],
   };
};
