import { Categories, Transaction } from "../types/globalTypes";

// function changes categories to transaction
// depending on selected category

export const categoriesChanger = (
   transaction: Transaction,
   selectedCategory: string,
   allCategories: Categories
) => {
   let categoryDescr: string;

   if (selectedCategory === "other") {
      const updatedCategoryArray = allCategories[transaction.category!].filter(
         (descr: string) => !transaction.description.includes(descr)
      );
      console.log(updatedCategoryArray);

      return {
         ...allCategories,
         [transaction.category!]: updatedCategoryArray,
      };
   }

   if (allCategories[transaction.category!]) {
      const updatedCategoryArray = allCategories[transaction.category!].filter(
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
         [transaction.category!]: updatedCategoryArray,
         [selectedCategory]: [
            ...allCategories[selectedCategory],
            categoryDescr!,
         ],
      };
   }

   return {
      ...allCategories,
      [selectedCategory]: [
         ...allCategories[selectedCategory],
         transaction.description,
      ],
   };
};
