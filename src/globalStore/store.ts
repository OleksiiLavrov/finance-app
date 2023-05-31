import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Categories, Transaction } from "../types/globalTypes";
import { categoriesSetter } from "../helpers/categoriesSetter";
import { categoriesChanger } from "../helpers/categoriesChanger";

interface IGlobalStore {
   transactions: Transaction[] | null;
   categories: Categories;
   getTransactions: (transactions: Transaction[]) => void;
   getTransactionById: (id: string) => Transaction;
   changeTransactionCategory: (
      transaction: Transaction,
      newCategory: string
   ) => void;
}

const savedCategories = JSON.parse(
   localStorage.getItem("transactionCategories")!
);

export const useGlobalStore = create<IGlobalStore>()(
   immer((set, get) => ({
      transactions: null,
      categories: savedCategories ? savedCategories : {},

      getTransactions: (transactions) => {
         const transactionsWithCategories = categoriesSetter(
            transactions!,
            get().categories
         );
         set({ transactions: transactionsWithCategories });
      },

      getTransactionById: (id) => {
         return get().transactions!.find(
            (transaction: Transaction) => transaction.id === id
         )!;
      },

      changeTransactionCategory: (transaction, newCategory) => {
         if (transaction.category !== newCategory) {
            const updatedCategories = categoriesChanger(
               transaction,
               newCategory,
               get().categories
            );

            localStorage.setItem(
               "transactionCategories",
               JSON.stringify(updatedCategories)
            );

            set((state) => {
               state.categories = { ...updatedCategories };
            });
            const transactions = categoriesSetter(
               [...get().transactions!],
               get().categories
            );
            set({ transactions: transactions });
         }
      },
   }))
);
