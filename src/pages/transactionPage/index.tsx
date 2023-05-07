import { PageTitle } from "../../ui";
import { TransactionTable } from "./components/Table/Table";

export const TransactionPage = () => {
  return (
    <section className="bg-gray-600 min-h-screen">
      <PageTitle title="Transactions" />
      <div className="bg-gray-600 py-10 pl-10 pr-14">
        <TransactionTable />
      </div>
    </section>
  );
};
