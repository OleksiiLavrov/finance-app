import { TabsItem } from "../../ui";

export const Tabs = () => {
  return (
    <div className="flex justify-between">
      <TabsItem tabItem="Balance" amount={41210} />
      <TabsItem tabItem="Income" amount={41210} />
      <TabsItem tabItem="Expenses" amount={41210} />
      <TabsItem tabItem="Savings" amount={41210} />
    </div>
  );
};
