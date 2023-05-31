import { PageTitle } from "../../ui";
import { TransactionTable } from "./components/Table/Table";
import { useGlobalStore } from "../../globalStore/store";

export const TransactionsPage = () => {
   const loading = useGlobalStore((state) => state.loading);
   return (
      <section className="bg-gray-600 min-h-screen">
         <PageTitle title="Transactions" />
         <div className="bg-gray-600 py-10 pl-10 pr-14">
            {loading ? <h1>Loading...</h1> : <TransactionTable />}
         </div>
      </section>
   );
};
