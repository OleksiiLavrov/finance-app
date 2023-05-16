import { IconSvgSelector } from "../../../../assets/icons/IconSvgSelector";
import { convertAmount } from "../../../../helpers/convertAmout";

export const CreditCardsItem = (props: { cardInfo?: any; balance: number }) => {
  const balance = convertAmount(props.balance);
  return (
    <div className="rounded-lg bg-gray-900">
      <div className="p-6 flex justify-between items-start">
        <div>
          <h4 className="text-3xl font-bold mb-7">Monobank</h4>
          <p className="text-2xl font-semibold text-gray-400">
            1234 5678 9123 4560
          </p>
        </div>
        <IconSvgSelector
          classname="scale-150 -translate-x-2 translate-y-2"
          icon="dashboard-mastercard"
        />
      </div>
      <div className="bg-gray-900 p-6 rounded-b-lg">
        <div className="flex justify-between">
          <p className="flex flex-col gap-2 uppercase">
            <span className="text-gray-500 text-sm font-semibold">
              Total Balance
            </span>
            <span className="text-lg font-semibold">
              {balance.toLocaleString()} UAH
            </span>
          </p>
          <p className="flex flex-col gap-2 uppercase">
            <span className="text-gray-500 text-sm font-semibold">
              Exp. Date
            </span>
            <span className="text-lg font-semibold">04 / 24</span>
          </p>
        </div>
      </div>
    </div>
  );
};
