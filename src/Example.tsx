import axios from "axios";
import React, { useEffect, useState } from "react";
import $api from "./http/api";
import { useStore } from "./store";
import { ClientService } from "./http/services/ClientService";
import { useGlobalStore } from "./globalStore";
import { Transaction } from "./types/globalTypes";

type ClientInfo = {
  accounts: Array<AccountInfo>;
  clientId: string;
  jars: JarInfo[];
  name: string;
  permissions: string;
  webHookUrl: string;
};

type AccountInfo = {
  balance: number;
  cashbackType: string;
  creditLimit: number;
  currencyCode: number;
  iban: string;
  id: string;
  maskedPan: string[];
  sendId: string;
  type: string;
};

type JarInfo = {
  balance: number;
  currencyCode: number;
  description: string;
  id: string;
  sendId: string;
  title: string;
};

export const Example: React.FC = () => {
  // const [transactions, setTransactions] = useState<any[]>();

  const { bears, increasePopulation } = useStore();
  const { getInfo, transactions, clientInfo } = useGlobalStore();

  useEffect(() => {
    // fetchData();
  }, []);

  // const fetchData = async () => {
  //   // if (localStorage.getItem("transactions")) {
  //   //   const transactions = JSON.parse(
  //   //     localStorage.getItem("transactions") || "{}"
  //   //   );
  //   //   console.log(transactions);

  //   //   setTransactions(transactions);
  //   // } else {
  //   // const clientInfo: ClientInfo = await ClientService.getClientInfo();
  //   const clientInfo: ClientInfo = (await $api.get("/client-info")).data;
  //   const transactions = (
  //     await $api.get(
  //       `/statement/${clientInfo.accounts[0].id}/1678442447/1681120847`
  //     )
  //   ).data;
  //   console.log(transactions);

  //   setTransactions(transactions);
  //   localStorage.setItem("transactions", JSON.stringify(transactions));
  //   // }
  // };

  const clickHandler = () => {
    increasePopulation();
    getInfo();
  };

  return (
    <div>
      <button onClick={clickHandler}>Increase</button>
      <p>{bears}</p>
      {transactions &&
        transactions.map((item: Transaction, index: number) => {
          return (
            <p key={index}>
              {item.description} - {item.amount}
            </p>
          );
        })}
    </div>
  );
};
