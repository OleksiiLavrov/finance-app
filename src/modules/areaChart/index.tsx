import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ChartData } from "./types";
import { defaultOptions } from "./options";

export const AreaChart = (props: {
  height: number;
  options?: ApexOptions;
  data: ChartData[];
}) => {
  return (
    <Chart
      options={{ ...defaultOptions, ...props.options }}
      series={props.data}
      type="area"
      height={props.height}
    />
  );
};
