import { ColumnChartComponent } from "../../ui";
import { columnChartXAxisOptions } from "./consts/chartOptions";
import { useChartStore } from "./store";

export const ColumnChart = () => {
   const setChartInfo = useChartStore((state) => state.setInfo);
   const { name, xAxis, yAxis } = setChartInfo(14);
   return (
      <div className="bg-gray-800 rounded-lg px-2 w-7/12">
         <ColumnChartComponent
            options={{
               xaxis: {
                  categories: xAxis,
                  ...columnChartXAxisOptions,
               },
            }}
            height={400}
            data={[{ name: name, data: yAxis }]}
         />
      </div>
   );
};
