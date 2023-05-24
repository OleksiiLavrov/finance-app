import { useEffect } from "react";
import { PageTitle } from "../../ui";
import { useTransactionsStore } from "../dashboardPage/store/transactions";
import { TransactionTable } from "./components/Table/Table";

export const TransactionPage = () => {
   const loading = useTransactionsStore((state) => state.loading);
   const getTransactions = useTransactionsStore(
      (state) => state.getTransactions
   );
   useEffect(() => {
      getTransactions();
   }, []);
   return (
      <section className="bg-gray-600 min-h-screen">
         <PageTitle title="Transactions" />
         <div className="bg-gray-600 py-10 pl-10 pr-14">
            {loading ? <h1>Loading...</h1> : <TransactionTable />}
         </div>
      </section>
   );
};
