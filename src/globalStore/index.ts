import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ClientInfo, Transaction } from "../types/globalTypes";
import { ClientService } from "../http/services/ClientService";

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
      const monthAgo = new Date().setDate(new Date().getDate() - 30);
      const clientInfoRes = await ClientService.getClientInfo();
      const requestArgs = {
        id: clientInfoRes.accounts[0].id,
        timeFrom: monthAgo,
        timeTo: Date.now(),
      };
      const transactionsRes = await ClientService.getTransactions(requestArgs);
      set({
        clientInfo: clientInfoRes,
        transactions: transactionsRes,
        loading: false,
      });
    },
  }))
);
