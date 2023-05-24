import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { Transaction } from "../../../types/globalTypes";
import { clientService } from "../../../http/services/clientService";
import { useGlobalStore } from "../../../globalStore/store";

interface IStore {
   transactions: Transaction[];
   loading: boolean;
   getTransactions: () => void;
}

export const useTransactionsStore = create<IStore>()(
   devtools(
      immer((set, get) => ({
         transactions: [],
         loading: true,

         getTransactions: async () => {
            if (!get().transactions.length) {
               const clientInfo = useGlobalStore.getState().clientInfo;
               const monthAgo = new Date().setDate(new Date().getDate() - 30);
               const requestArgs = {
                  id: clientInfo!.accounts[0].id,
                  timeFrom: monthAgo,
                  timeTo: Date.now(),
               };
               try {
                  const transactionsRes = await clientService.getTransactions(
                     requestArgs
                  );
                  set({
                     transactions: transactionsRes,
                     loading: false,
                  });
               } catch (error) {
                  set({
                     loading: false,
                  });
               }
            }
         },
      }))
   )
);
