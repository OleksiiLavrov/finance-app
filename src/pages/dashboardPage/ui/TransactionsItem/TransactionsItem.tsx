import { IconSvgSelector } from "../../../../assets/icons/IconSvgSelector";
import { convertAmount } from "../../../../helpers/convertAmout";
import { Transaction } from "../../../../types/globalTypes";

export const TransactionsItem = (props: { transaction: Transaction }) => {
  const amount = convertAmount(props.transaction.amount);
  return (
    <div className="flex items-center justify-between pb-3 border-b-2 border-gray-700 mt-4">
      <div className="flex items-center">
        <div className="rounded-md border-2 border-yellow-400 p-2 mr-3">
          <IconSvgSelector
            icon="menu-personal"
            classname="w-9 h-9 fill-yellow-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">
            {amount > 0 ? "Transfer from" : "Transfer to"}
          </p>
          <p className="font-regular text-xl">
            {props.transaction.description}
          </p>
        </div>
      </div>
      <span
        className={`font-semibold text-lg ${
          amount > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {props.transaction.amount > 0
          ? `+${amount.toLocaleString()}₴`
          : `${amount.toLocaleString()}₴`}
      </span>
    </div>
  );
};
