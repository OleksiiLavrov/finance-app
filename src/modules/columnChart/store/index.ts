import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { ChartInfo } from "../../../types/globalTypes";
import { useGlobalStore } from "../../../globalStore/store";
import { totalIncomePerDay } from "../utils/totalPerDay";

interface IStore {
   columnChartInfo: ChartInfo;
   setInfo: (period: number) => ChartInfo;
}

export const useChartStore = create<IStore>()(
   devtools(
      immer((set, get) => ({
         columnChartInfo: {
            name: "Total Income Per Day",
            yAxis: [],
            xAxis: [],
         },
         setInfo: (period) => {
            const transactions = useGlobalStore.getState().transactions;
            const { arrTotal, arrDate } = totalIncomePerDay(
               transactions,
               period
            );
            set((state) => ({
               columnChartInfo: {
                  name: state.columnChartInfo.name,
                  yAxis: arrTotal,
                  xAxis: arrDate,
               },
            }));
            return get().columnChartInfo;
         },
      }))
   )
);
