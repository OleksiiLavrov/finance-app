import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ClientInfo, Transaction } from "../types/globalTypes";
import { clientService } from "../http/services/clientService";
import { useGlobalStore } from "./store";

interface IInitialStore {
   clientInfo: ClientInfo | null;
   loading: boolean;
   transactions: Transaction[] | null;
   getInfo: () => void;
   getTransactions: () => void;
}

export const useInitialStore = create<IInitialStore>()(
   immer((set, get) => ({
      clientInfo: null,
      loading: true,
      transactions: null,

      getInfo: async () => {
         set({ loading: true });
         try {
            const clientInfoRes = await clientService.getClientInfo();
            set({ clientInfo: clientInfoRes });
            get().getTransactions();
         } catch (error) {
            set({ loading: false });
         }
      },

      getTransactions: async () => {
         set({ loading: true });
         try {
            const monthAgo = new Date().setDate(new Date().getDate() - 30);
            const requestArgs = {
               id: get().clientInfo!.accounts[0].id,
               timeFrom: monthAgo,
               timeTo: Date.now(),
            };
            const transactionsRes = await clientService.getTransactions(
               requestArgs
            );
            useGlobalStore.getState().getTransactions(transactionsRes);

            set({
               transactions: transactionsRes,
               loading: false,
            });
         } catch (error) {
            set({ loading: false });
         }
      },
   }))
);
