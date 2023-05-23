import { fireEvent, render } from "@testing-library/react";
import { ChartSelector } from "./ChartSelector";

describe("Chart Selector", () => {
   const changeHandlerMock = jest.fn();
   it("should check onchange event", () => {
      const { getByTestId } = render(
         <ChartSelector changeHandler={changeHandlerMock} />
      );
      const select = getByTestId("chart-selector");
      expect(changeHandlerMock).not.toHaveBeenCalled();
      fireEvent.change(select);
      expect(changeHandlerMock).toHaveBeenCalled();
   });
});
