import Chart from "react-apexcharts";

export const LineChart = () => {
  const data = {
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      markers: {
        size: 5,
        hover: {
          size: 7,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [40, 50, 55, 60, 70, 65, 80, 100],
      },
    ],
  };
  return (
    <Chart
      options={data.options}
      series={data.series}
      type="line"
      width="500"
    />
  );
};
