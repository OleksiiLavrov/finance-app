import { useEffect, useState } from "react";
import { ChartSelector } from "../../ui/ChartSelector/ChartSelector";
import { ChartType } from "../../consts/chartType";
import { AreaChartModule } from "../../../../modules";
import { useChartsStore } from "../../stores/charts";
import { areaChartXAxisOptions } from "../../consts/chartOptions";

export const AreaChart = () => {
   const [chartPeriod, setChartPeriod] = useState(ChartType.Weekly);
   const setChartInfo = useChartsStore((state) => state.setInfo);
   const { name, xAxis, yAxis } = setChartInfo(chartPeriod);

   const changeHandler = (e: any) => {
      setChartPeriod(e.target.value);
   };
   return (
      <div className="bg-gray-800 rounded-lg relative p-4">
         <ChartSelector changeHandler={changeHandler} />
         <AreaChartModule
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
