import { Categories, Transaction } from "../types/globalTypes";

// function sets categories to transaction
// depending on it's descripton

export const categoriesSetter = (
   transactions: Transaction[],
   categories: Categories
) => {
   const updatedTransactions: Transaction[] = [];
   transactions.map((transaction: Transaction) => {
      const updatedTransaction = { ...transaction };
      for (const key in categories) {
         categories[key].map((descr: string) => {
            if (
               updatedTransaction.description.toLowerCase() ===
               descr.toLowerCase()
            ) {
               updatedTransaction.category = key;
            }
         });
      }
      if (!updatedTransaction.category) {
         updatedTransaction.category = "other";
      }
      updatedTransactions.push(updatedTransaction);
   });
   return updatedTransactions;
};
