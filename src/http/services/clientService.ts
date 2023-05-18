import $api from "../api";
import type {
   ClientInfoResponse,
   ClientTransactionsResponse,
} from "../types/response/ClientResponse";
import type { ClientInfoRequest } from "../types/request/ClientRequest";
import { wrapPromise } from "../wrapPromise";

export const clientService = {
   clientInfo: wrapPromise<ClientInfoResponse, null>(async () => {
      return (await $api.get("/client-info")).data;
   }),

   transactions: wrapPromise<ClientTransactionsResponse, ClientInfoRequest>(async (args) => {
      return (await $api.get(`/statement/${args!.id}/${args!.timeFrom}/${args!.timeTo}`)).data;
   }),

   async getClientInfo(): Promise<ClientInfoResponse> {
      return (await $api.get("/client-info")).data;
   },
   async getTransactions(args: ClientInfoRequest): Promise<ClientTransactionsResponse> {
      return (await $api.get(`/statement/${args.id}/${args.timeFrom}/${args.timeTo}`)).data;
   },
};
