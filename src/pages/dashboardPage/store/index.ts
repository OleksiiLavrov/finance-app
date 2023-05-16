import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { ChartInfo } from "../../../types/globalTypes";
import { match } from "ts-pattern";

interface IStore {
  areaChartInfo: ChartInfo;
  columnChartInfo: ChartInfo;
  setInfo: (
    newData: Array<string | number>,
    chartType: "area" | "column"
  ) => void;
}

export const useStore = create<IStore>()(
  devtools(
    immer((set) => ({
      areaChartInfo: {
        name: "Balance",
        data: [],
      },
      columnChartInfo: {
        name: "Total per day",
        data: [],
      },
      
      setInfo: (newData, chartType) => {
        match(chartType)
          .with("area", () =>
            set((state) => ({
              areaChartInfo: {
                name: state.areaChartInfo.name,
                data: newData,
              },
            }))
          )
          .with("column", () =>
            set((state) => ({
              columnChartInfo: {
                name: state.columnChartInfo.name,
                data: [...state.columnChartInfo.data, ...newData],
              },
            }))
          )
          .exhaustive();
      },
    }))
  )
);
