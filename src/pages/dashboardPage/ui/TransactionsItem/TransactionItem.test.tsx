import { render } from "@testing-library/react";
import { TransactionsItem } from "./TransactionsItem";
import { transactionMock } from "./__mocks__/transactionMock";

describe("Transaction item", () => {
   it("should render component correctly with positive amount", () => {
      const amount = 100000;
      const { getByTestId } = render(
         <TransactionsItem transaction={{ ...transactionMock, amount }} />
      );
      expect(getByTestId("transaction-transfer")).toHaveTextContent(
         "Transfer from"
      );
      expect(getByTestId("transaction-descr")).toHaveTextContent(
         transactionMock.description
      );
      expect(getByTestId("transaction-amount")).toHaveTextContent("+1,000");
      expect(getByTestId("transaction-amount")).toHaveClass("text-green-500");
   });
   it("should render component correctly with negative amount", () => {
      const amount = -100000;
      const { getByTestId } = render(
         <TransactionsItem transaction={{ ...transactionMock, amount }} />
      );
      expect(getByTestId("transaction-transfer")).toHaveTextContent(
         "Transfer to"
      );
      expect(getByTestId("transaction-descr")).toHaveTextContent(
         transactionMock.description
      );
      expect(getByTestId("transaction-amount")).toHaveTextContent("-1,000");
      expect(getByTestId("transaction-amount")).toHaveClass("text-red-500");
   });
});
