import ReactApexChart from "react-apexcharts";

export const ColumnChart = () => {
  const data = {
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 6.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    options: {
      chart: {
        id: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        style: {
          color: "#444",
        },
      },
    },
  };

  return (
    <ReactApexChart
      options={data.options}
      series={data.series}
      type={"bar"}
      height={350}
      width={500}
    />
  );
};
