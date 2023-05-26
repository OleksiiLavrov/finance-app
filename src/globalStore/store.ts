import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ClientInfo, Transaction } from "../types/globalTypes";
import { clientService } from "../http/services/clientService";

interface IGlobalStore {
   clientInfo: ClientInfo | null;
   loading: boolean;
   transactions: Transaction[];
   getInfo: () => void;
}

export const useGlobalStore = create<IGlobalStore>()(
   immer((set) => ({
      clientInfo: null,
      loading: true,
      transactions: [],

      getInfo: async () => {
         set({ loading: true });
         try {
            const monthAgo = new Date().setDate(new Date().getDate() - 30);
            const clientInfoRes = await clientService.getClientInfo();
            const requestArgs = {
               id: clientInfoRes.accounts[0].id,
               timeFrom: monthAgo,
               timeTo: Date.now(),
            };
            const transactionsRes = await clientService.getTransactions(
               requestArgs
            );
            set({
               clientInfo: clientInfoRes,
               transactions: transactionsRes,
               loading: false,
            });
         } catch (error) {
            set({ loading: false });
         }
      },
   }))
);
