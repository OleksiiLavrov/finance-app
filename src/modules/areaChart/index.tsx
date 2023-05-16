import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { defaultOptions } from "./options";

export const AreaChartModule = (props: {
  height: number;
  options?: ApexOptions;
  data: ApexAxisChartSeries;
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
