import { useGlobalStore } from "../../../../globalStore/store";
import { useTransactionsStore } from "../../store/transactions";
import { TabsItem } from "../../ui";
import { countAmount } from "../../utils/countAmount";

export const Tabs = () => {
   const clientInfo = useGlobalStore((state) => state.clientInfo);
   const transactions = useTransactionsStore((state) => state.transactions);

   return (
      <div className="flex justify-between gap-6">
         <TabsItem tabItem="Balance" amount={clientInfo!.accounts[0].balance} />
         <TabsItem tabItem="Income" amount={countAmount.income(transactions)} />
         <TabsItem
            tabItem="Expenses"
            amount={countAmount.outcome(transactions)}
         />
         <TabsItem
            tabItem="Savings"
            amount={countAmount.savings(clientInfo!.jars)}
         />
      </div>
   );
};
