import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { defaultOptions } from "./options";

export const ColumnChartModule = (props: {
  height: number;
  options?: ApexOptions;
  data: ApexAxisChartSeries;
}) => {
  return (
    <Chart
      options={{ ...defaultOptions, ...props.options }}
      series={props.data}
      type={"bar"}
      height={props.height}
    />
  );
};
