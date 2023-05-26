import { convertAmount } from "../../../helpers/convertAmount";
import { timeConverter } from "../../../helpers/unixTimeConverter";
import { Transaction } from "../../../types/globalTypes";

type Obj = {
   [string: string]: number;
};
export const balancePerDay = (transactions: Transaction[], period: number) => {
   const dateFrom = new Date().setDate(new Date().getDate() - period) / 1000;
   const obj: Obj = {};
   transactions.map((transaction: Transaction) => {
      if (transaction.time >= dateFrom) {
         const { day } = timeConverter(transaction.time);
         if (!obj[day]) {
            obj[day] = transaction.balance;
         }
      }
   });

   for (let i = period - 1; i >= 0; i--) {
      const current = timeConverter(
         new Date().setDate(new Date().getDate() - i) / 1000
      );
      const next = timeConverter(
         new Date().setDate(new Date().getDate() - (i - 1)) / 1000
      );
      const prev = timeConverter(
         new Date().setDate(new Date().getDate() - (i + 1)) / 1000
      );

      if (!obj[current.day]) {
         if (obj[prev.day]) {
            obj[current.day] = obj[prev.day];
         }
         if (obj[next.day]) {
            obj[current.day] = obj[next.day];
         }
      }
   }
   const arrBalance: number[] = [];
   const arrDate: string[] = [];
   for (let i = period - 1; i >= 0; i--) {
      const { day } = timeConverter(
         new Date().setDate(new Date().getDate() - i) / 1000
      );
      arrBalance.push(Number(convertAmount(obj[day])));
      arrDate.push(day);
   }
   return { arrBalance, arrDate };
};
