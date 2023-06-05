import { JarInfo, Transaction } from "../../../types/globalTypes";

export const countAmount = {
  income: (arr: Transaction[]) => {
    return arr.reduce((acc: number, curTransaction: Transaction) => {
      if (curTransaction.amount > 0) {
        return acc + curTransaction.amount;
      }
      return acc;
    }, 0);
  },
  outcome: (arr: Transaction[]) => {
    return arr.reduce((acc: number, curTransaction: Transaction) => {
      if (curTransaction.amount < 0) {
        return acc + curTransaction.amount;
      }
      return acc;
    }, 0);
  },
  savings: (arr: JarInfo[]) => {
    return arr.reduce(
      (acc: number, curJar: JarInfo) => acc + curJar.balance,
      0
    );
  },
};
