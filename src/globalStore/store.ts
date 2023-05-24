import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ClientInfo, Transaction } from "../types/globalTypes";
import { clientService } from "../http/services/clientService";

interface IGlobalStore {
   clientInfo: ClientInfo | null;
   loading: boolean;
   getClientInfo: () => void;
}

export const useGlobalStore = create<IGlobalStore>()(
   immer((set) => ({
      clientInfo: null,
      loading: true,

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
   }))
);
