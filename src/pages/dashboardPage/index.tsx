import { ColumnChart, PageTitle } from "../../ui";
import {
  Chart,
  Tab,
  CreditCards,
  Categories,
  Transactions,
} from "./components";

export const DashboardPage = () => {
  return (
    <section className="bg-gray-600">
      <PageTitle title="Dashboard" />
      <div className="bg-gray-600 py-10 pl-10 pr-14 flex justify-between gap-12">
        <div className="flex flex-col gap-6 justify-between w-1050 3xl:w-2/3">
          <div className="flex justify-between">
            <Tab tabItem="Balance" amount="41,210" />
            <Tab tabItem="Income" amount="41,210" />
            <Tab tabItem="Expenses" amount="41,210" />
            <Tab tabItem="Savings" amount="41,210" />
          </div>
          <Chart />
          <div className="flex gap-6">
            <div className="bg-gray-800 rounded-lg px-2 w-7/12">
              <ColumnChart height={400} />
            </div>
            <Categories />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-600 3xl:w-5/12">
          <CreditCards />
          <Transactions />
        </div>
      </div>
    </section>
  );
};
