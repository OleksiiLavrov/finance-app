import { render } from "@testing-library/react";
import { TabsItem } from "./TabsItem";

describe("Tabs item", () => {
   it("should render component correctly", () => {
      const { getByTestId } = render(
         <TabsItem tabItem="Balance" amount={1000000} />
      );
      expect(getByTestId("tab-title")).toHaveTextContent("Balance");
      expect(getByTestId("tab-amount")).toHaveTextContent("10,000");
   });
});
