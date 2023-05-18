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
   immer((set, get) => ({
      clientInfo: null,
      loading: true,
      transactions: [],

      getInfo: async () => {
         set({ loading: true });
         const monthAgo = new Date().setDate(new Date().getDate() - 30);
         const clientInfoRes = await clientService.getClientInfo();
         const requestArgs = {
            id: clientInfoRes.accounts[0].id,
            timeFrom: monthAgo,
            timeTo: Date.now(),
         };
         const transactionsRes = await clientService.getTransactions(requestArgs);
         set({
            clientInfo: clientInfoRes,
            transactions: transactionsRes,
            loading: false,
         });
      },

      getClientInfo: async () => {
         try {
            set({ loading: true });
            const clientInfoResponse = await clientService.getClientInfo();
            set({
               clientInfo: clientInfoResponse,
               loading: false,
            });
         } catch (error) {
            console.log(error);
         }
      },

      getTransactions: async () => {
         const clientInfo = get().clientInfo;
         const monthAgo = new Date().setDate(new Date().getDate() - 30);
         const requestArgs = {
            id: clientInfo!.accounts[0].id,
            timeFrom: monthAgo,
            timeTo: Date.now(),
         };
         const transactionsRes = await clientService.getTransactions(requestArgs);
         set({
            transactions: transactionsRes,
         });
      },
   }))
);
