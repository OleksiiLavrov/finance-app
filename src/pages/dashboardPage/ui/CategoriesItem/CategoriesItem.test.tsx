import { render } from "@testing-library/react";
import { CategoriesItem } from "./CategoriesItem";

describe("Categories item", () => {
   it("should render component correctly", () => {
      const { getByTestId } = render(
         <CategoriesItem iconName="house" spent={6000} total={10000} />
      );
      expect(getByTestId("category-title")).toHaveTextContent("House");
      expect(getByTestId("category-amount")).toHaveTextContent(
         "₴6,000 / ₴10,000"
      );
      expect(getByTestId("category-bar")).toHaveStyle({ width: "60%" });
   });
});
