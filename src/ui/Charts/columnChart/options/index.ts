import { ApexOptions } from "apexcharts";

export const defaultOptions: ApexOptions = {
   chart: {
      id: "bar",
      toolbar: {
         show: false,
      },
   },
   plotOptions: {
      bar: {
         borderRadius: 3,
         columnWidth: "100%",
         dataLabels: {
            position: "top",
         },
         colors: {
            ranges: [
               {
                  from: -100000,
                  to: -1,
                  color: "#EF4444",
               },
               {
                  from: 1,
                  to: 100000,
                  color: "#22C55E",
               },
            ],
         },
      },
   },
   colors: ["#FACC15"],
   dataLabels: {
      enabled: false,
   },
   xaxis: {
      categories: [
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
         "01",
      ],
      axisBorder: {
         show: false,
      },
      labels: {
         offsetY: 4,
         style: {
            colors: "#A9A9A9",
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
   title: {
      text: "Total income per day",
      margin: 40,
      offsetX: 9,
      style: {
         fontSize: "30px",
         fontWeight: 600,
         color: "#ffffff",
      },
   },
   grid: {
      borderColor: "#9A9A9A",
      strokeDashArray: 6,
   },
   tooltip: {
      style: {
         fontSize: "16px",
      },
      theme: "dark",
   },
};
