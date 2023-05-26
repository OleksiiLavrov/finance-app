import { PageTitle } from "../../ui";
import { TransactionTable } from "./components/Table/Table";
import { useGlobalStore } from "../../globalStore/store";
import { balancePerDay } from "../dashboardPage/utils/balancePerDay";

export const TransactionPage = () => {
   const loading = useGlobalStore((state) => state.loading);
   const transactions = useGlobalStore((state) => state.transactions);
   balancePerDay(transactions, 20);
   return (
      <section className="bg-gray-600 min-h-screen">
         <PageTitle title="Transactions" />
         <div className="bg-gray-600 py-10 pl-10 pr-14">
            {loading ? <h1>Loading...</h1> : <TransactionTable />}
         </div>
      </section>
   );
};
