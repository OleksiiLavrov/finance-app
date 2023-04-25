import { IconSvgSelector } from "../../../../../assets/icons/IconSvgSelector";

export const Transaction = (props: { transaction?: any }) => {
  return (
    <li className="flex items-center justify-between pb-3 border-b-2 border-gray-700 mt-4">
      <div className="flex items-center">
        <div className="rounded-md border-2 border-yellow-400 p-2 mr-3">
          <IconSvgSelector
            icon="menu-personal"
            classname="w-9 h-9 fill-yellow-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">Transfers from</p>
          <p className="font-regular text-xl">Matheus Ferrero</p>
        </div>
      </div>
      <span className="font-semibold text-green-500">+₴189,7</span>
    </li>
  );
};
