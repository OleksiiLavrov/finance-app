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
   balancePerDay: (transactions: Transaction[], daysToTake: number) => {
      const balancePerDay: BalancePerDay = {};
      const formatedData: FormatedAmountPerPeriod[] = [];
      transactions.map((transaction: Transaction) => {
         const { day, time } = timeConverter(transaction.time);
         if (balancePerDay.hasOwnProperty(day)) {
            balancePerDay[day].push({
               time: time,
               balance: transaction.balance,
            });
         } else {
            balancePerDay[day] = [{ time: time, balance: transaction.balance }];
         }
      });

      const days = Object.keys(balancePerDay);
      console.log(balancePerDay);

      days.forEach((day: string, id: number) => {
         if (balancePerDay[day][0]) {
            formatedData.push({
               day: day,
               data: balancePerDay[day][0].balance,
            });
         } else if (
            !balancePerDay[day][0] &&
            balancePerDay[days[id + 1]][balancePerDay[days[id - 1]].length - 1]
         ) {
            formatedData.push({
               day: day,
               data: balancePerDay[days[id - 1]][
                  balancePerDay[days[id - 1]].length - 1
               ].balance,
            });
         }
      });
      const chartData: number[] = [];
      const chartAxisX: string[] = [];

      formatedData.map((item: FormatedAmountPerPeriod, id: number) => {
         if (id < daysToTake) {
            chartData.unshift(item.data);
            chartAxisX.unshift(item.day);
         }
      });

      console.log(formatedData);
   },
};
