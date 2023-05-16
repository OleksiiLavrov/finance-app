import { ColumnChartModule } from "../../../../modules";
import { useGlobalStore } from "../../../../globalStore";
import { useStore } from "../../store";
import { filterTransactions } from "../../utils/filterTransactions";
import { useEffect, useMemo } from "react";

export const ColumnChart = () => {
  const chartInfo = useStore((state) => state.columnChartInfo);
  const setChartInfo = useStore((state) => state.setInfo);
  const transactions = useGlobalStore((state) => state.transactions);
  const { chartAxisX, chartData } = useMemo(
    () => filterTransactions.totalIncomePerDay(transactions, 14),
    [transactions]
  );

  useEffect(() => {
    setChartInfo(chartData, "column");
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg px-2 w-7/12">
      <ColumnChartModule
        height={400}
        data={[chartInfo]}
        options={{
          xaxis: {
            categories: chartAxisX,
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
        }}
      />
    </div>
  );
};
