import { convertAmount } from "../../../helpers/convertAmount";
import { timeConverter } from "../../../helpers/unixTimeConverter";
import { Transaction } from "../../../types/globalTypes";

type Obj = {
   [string: string]: number[];
};

export const totalIncomePerDay = (
   transactions: Transaction[],
   period: number
) => {
   const dateFrom = new Date().setDate(new Date().getDate() - period) / 1000;
   const obj: Obj = {};
   transactions.map((transaction: Transaction) => {
      if (transaction.time >= dateFrom) {
         const { day } = timeConverter(transaction.time);
         if (!obj[day]) {
            obj[day] = [transaction.amount];
         } else {
            obj[day].push(transaction.amount);
         }
      }
   });
   for (let i = period - 1; i >= 0; i--) {
      const { day } = timeConverter(
         new Date().setDate(new Date().getDate() - i) / 1000
      );

      if (!obj[day]) {
         obj[day] = [0];
      }
   }
   const arrTotal: number[] = [];
   const arrDate: string[] = [];
   for (let i = period - 1; i >= 0; i--) {
      const { day } = timeConverter(
         new Date().setDate(new Date().getDate() - i) / 1000
      );
      const totalPerDay = obj[day].reduce((acc, cur) => acc + cur, 0);
      arrTotal.push(Number(convertAmount(totalPerDay)));
      arrDate.push(day);
   }

   return { arrDate, arrTotal };
};
