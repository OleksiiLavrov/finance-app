import "./index.css";
import { CreditCardsItem } from "../../ui";
import { countAmount } from "../../helpers/countAmount";
import { useInitialStore } from "../../../../globalStore/initialStore";

export const CreditCards = () => {
   const clientInfo = useInitialStore((state) => state.clientInfo);
   const totalBalance =
      clientInfo!.accounts[0].balance + countAmount.savings(clientInfo!.jars);
   return (
      <div className="rounded-lg bg-gray-800 py-6 px-10">
         <h3 className="text-2xl font-semibold pb-6">Credit Cards</h3>
         <div className="cards_wrapper">
            <div className="cards_item shadow-lg shadow-sky-900 rounded-lg">
               <CreditCardsItem balance={totalBalance} color="" />
            </div>
            <div className="cards_item shadow-lg shadow-gray-900 rounded-lg">
               <CreditCardsItem balance={totalBalance} color="black" />
            </div>
         </div>
      </div>
   );
};
