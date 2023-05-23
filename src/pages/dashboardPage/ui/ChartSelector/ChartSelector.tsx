export const ChartSelector = (props: {
   changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
   return (
      <div className="px-2 py-1 absolute top-6 right-4 rounded-lg border border-gray-500 z-10">
         <select
            data-testid="chart-selector"
            className="px-3 py-2 bg-gray-800 rounded-lg w-28 text-gray-400"
            onChange={props.changeHandler}
            defaultValue="Weekly"
         >
            <option className="w-32" value="Weekly">
               Weekly
            </option>
            <option className="w-32" value="Monthly">
               Monthly
            </option>
         </select>
      </div>
   );
};
