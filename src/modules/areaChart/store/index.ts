import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { ChartInfo } from "../../../types/globalTypes";
import { useGlobalStore } from "../../../globalStore/store";
import { balancePerDay } from "../utils/balancePerDay";

interface IStore {
   areaChartInfo: ChartInfo;
   setInfo: (period: number) => ChartInfo;
}

export const useChartStore = create<IStore>()(
   devtools(
      immer((set, get) => ({
         areaChartInfo: {
            name: "Balance",
            yAxis: [],
            xAxis: [],
         },
         setInfo: (period) => {
            const transactions = useGlobalStore.getState().transactions;
            const { arrBalance, arrDate } = balancePerDay(transactions, period);
            set((state) => ({
               areaChartInfo: {
                  name: state.areaChartInfo.name,
                  yAxis: arrBalance,
                  xAxis: arrDate,
               },
            }));
            return get().areaChartInfo;
         },
      }))
   )
);
