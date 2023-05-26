import { useState } from "react";
import { ChartSelector } from "./ui/ChartSelector/ChartSelector";
import { useChartStore } from "./store";
import { areaChartXAxisOptions } from "./consts/chartOptions";
import { ChartType } from "./consts/chartType";
import { AreaChartComponent } from "../../ui";

export const AreaChart = () => {
   const [chartPeriod, setChartPeriod] = useState(ChartType.Weekly);
   const setChartInfo = useChartStore((state) => state.setInfo);
   const { name, xAxis, yAxis } = setChartInfo(chartPeriod);

   const changeHandler = (e: any) => {
      setChartPeriod(e.target.value);
   };
   return (
      <div className="bg-gray-800 rounded-lg relative p-4">
         <ChartSelector changeHandler={changeHandler} />
         <AreaChartComponent
            options={{
               xaxis: {
                  categories: xAxis,
                  ...areaChartXAxisOptions,
               },
            }}
            height={500}
            data={[{ name: name, data: yAxis }]}
         />
      </div>
   );
};
