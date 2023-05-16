import {  useState } from "react";
import { ChartSelector } from "../../ui/ChartSelector/ChartSelector";
import { chartType } from "../../consts/chartType";
import { AreaChartModule } from "../../../../modules";

export const AreaChart = () => {
  const [chart, setChart] = useState(chartType.weekly);
  const storedData = [
    {
      name: "Balance",
      data: [2.3, 3.1, 4.0, 5.9, 4.0, 3.6, 3.2],
    },
  ];

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChart(e.target.value);
  };
  return (
    <div className="bg-gray-800 rounded-lg relative p-4">
      <ChartSelector chart={chart} changeHandler={changeHandler} />
      {chart === chartType.weekly && (
        <AreaChartModule height={500} data={storedData} />
      )}
      {chart === chartType.monthly && (
        <AreaChartModule height={500} data={storedData} />
      )}
    </div>
  );
};
