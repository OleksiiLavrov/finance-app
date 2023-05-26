export type ClientInfo = {
   accounts: Array<AccountInfo>;
   clientId: string;
   jars: JarInfo[];
   name: string;
   permissions: string;
   webHookUrl: string;
};

export type AccountInfo = {
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

export type JarInfo = {
   balance: number;
   currencyCode: number;
   description: string;
   id: string;
   sendId: string;
   title: string;
};

export type Transaction = {
   amount: number;
   balance: number;
   cashbackAmount: number;
   commissionRate: number;
   currencyCode: number;
   description: string;
   hold: boolean;
   id: string;
   mcc: number;
   originalMcc: number;
   operationAmount: number;
   time: number;
};

export type ChartInfo = {
   name: string;
   yAxis: number[];
   xAxis: (string | number)[];
};
