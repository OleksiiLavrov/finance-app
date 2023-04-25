import { IconSvgSelector } from "../../../../assets/icons/IconSvgSelector";

export const Tab = (props: { tabItem: string; amount: string }) => {
  return (
    <div className="rounded-lg bg-gray-800 py-6 pl-6 pr-9 flex justify-between items-end gap-6">
      <div className="w-12 h-12 rounded-lg bg-gray-600 flex justify-center items-center">
        <IconSvgSelector
          classname="w-8 h-8 fill-yellow-400"
          icon={`dashboard-${props.tabItem.toLowerCase()}`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-gray-400">{props.tabItem}</span>
        <span className="text-3xl font-semibold">₴{props.amount}</span>
      </div>
    </div>
  );
};
