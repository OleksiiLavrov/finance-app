import $api from "../api";
import type {
  ClientInfoResponse,
  ClientTransactionsResponse,
} from "../models/response/ClientResponse";
import type { ClientInfoRequest } from "../models/request/ClientRequest";

export class ClientService {
  static async getClientInfo(): Promise<ClientInfoResponse> {
    return (await $api.get("/client-info")).data;
  }
  static async getTransactions(
    args: ClientInfoRequest
  ): Promise<ClientTransactionsResponse> {
    return (
      await $api.get(`/statement/${args.id}/${args.timeFrom}/${args.timeTo}`)
    ).data;
  }
}
