import { ApexOptions } from "apexcharts";

export const defaultOptions: ApexOptions = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: ["01/04", "02/04", "03/04", "04/04", "05/04", "06/04", "07/04"],
    axisBorder: {
      show: false,
    },
    labels: {
      offsetY: 4,
      style: {
        colors: [
          "#A9A9A9",
          "#A9A9A9",
          "#A9A9A9",
          "#A9A9A9",
          "#A9A9A9",
          "#A9A9A9",
          "#A9A9A9",
          "#A9A9A9",
        ],
        fontSize: "16px",
        fontWeight: 600,
      },
    },
  },
  yaxis: {
    labels: {
      offsetX: -6,
      style: {
        colors: ["#A9A9A9"],
        fontSize: "16px",
        fontWeight: 600,
      },
    },
  },
  colors: ["#facc15"],
  markers: {
    size: 4,
    hover: {
      size: 7,
    },
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "center",
    fontSize: "16px",
    fontWeight: 600,
    offsetY: -75,
    labels: {
      colors: "#A9A9A9",
    },
    markers: {
      offsetX: -4,
      offsetY: -1,
    },
    itemMargin: {
      horizontal: 10,
    },
  },
  grid: {
    borderColor: "#9A9A9A",
    strokeDashArray: 6,
  },
  title: {
    text: "Balance",
    margin: 50,
    offsetX: 5,
    style: {
      fontSize: "30px",
      fontWeight: 600,
      color: "#ffffff",
    },
  },
  tooltip: {
    style: {
      fontSize: "16px",
    },
    theme: "dark",
  },
};
