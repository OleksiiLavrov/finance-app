import { useState } from "react";
import { ChartSelector } from "./ChartSelector/ChartSelector";
import { LineChart } from "../../../../ui";
import { chartType } from "../../consts/chartType";
export const Chart = () => {
  const [chart, setChart] = useState(chartType.weekly);
  return (
    <div className="bg-gray-800 rounded-lg relative p-4">
      <ChartSelector chart={chart} setChart={setChart} />
      {chart === chartType.weekly && <LineChart height={500} />}
      {chart === chartType.monthly && <LineChart height={500} />}
    </div>
  );
};
