import { timeConverter } from "../../../helpers/unixTimeConverter";
import { convertAmount } from "../../../helpers/convertAmount";
import type { Transaction } from "../../../types/globalTypes";

type AmountPerPeriod = {
   [date: string]: number;
};
type BalancePerDay = {
   [date: string]: { time: string; balance: number }[];
};
type FormatedAmountPerPeriod = {
   day: string;
   data: number;
};

export const filterTransactions = {
   totalIncomePerDay: (transactions: Transaction[], daysToTake: number) => {
      const amountPerDay: AmountPerPeriod = {};
      const formatedData: FormatedAmountPerPeriod[] = [];

      transactions.map((transaction: Transaction) => {
         const { day } = timeConverter(transaction.time);
         if (amountPerDay.hasOwnProperty(day)) {
            amountPerDay[day] += convertAmount(transaction.amount);
         } else {
            amountPerDay[day] = 0;
         }
      });
      for (let key in amountPerDay) {
         formatedData.push({ day: key, data: amountPerDay[key] });
      }
      const chartData: number[] = [];
      const chartAxisX: string[] = [];

      formatedData.map((item: FormatedAmountPerPeriod, id: number) => {
         if (id < daysToTake) {
            chartData.unshift(item.data);
            chartAxisX.unshift(item.day);
         }
      });

      return { chartData, chartAxisX };
   },
};
