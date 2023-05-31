import { PageTitle } from "../../ui";
import { TransactionTable } from "./components/Table/Table";
import { useInitialStore } from "../../globalStore/initialStore";

export const TransactionsPage = () => {
   const loading = useInitialStore((state) => state.loading);
   return (
      <section className="bg-gray-600 min-h-screen">
         <PageTitle title="Transactions" />
         {loading ? (
            <h1>Loading...</h1>
         ) : (
            <div className="bg-gray-600 py-10 pl-10 pr-14">
               <TransactionTable />
            </div>
         )}
      </section>
   );
};
