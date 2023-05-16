import { useGlobalStore } from "../../globalStore";
import { PageTitle } from "../../ui";
import {
  AreaChart,
  CreditCards,
  Categories,
  Transactions,
  Tabs,
  ColumnChart,
} from "./components";

export const DashboardPage = () => {
  const loading = useGlobalStore((state) => state.loading);
  return (
    <section className="bg-gray-600 min-h-screen">
      <PageTitle title="Dashboard" />
      {loading 
      ? <h3>Loading...</h3> 
      : <div className="bg-gray-600 py-10 pl-10 pr-14 flex justify-between gap-12">
            <div className="flex flex-col gap-6 justify-between w-1050 3xl:w-2/3">
              <Tabs />
              <AreaChart />
              <div className="flex gap-6">
                <ColumnChart />
                <Categories />
              </div>
            </div>
            <div className="flex flex-col gap-6 w-600 3xl:w-5/12">
              <CreditCards />
              <Transactions />
            </div>
          </div>}
    </section>
  );
};
