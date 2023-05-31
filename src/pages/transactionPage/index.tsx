import { useParams } from "react-router";
import { useGlobalStore } from "../../globalStore/store";

export const TransactionPage = () => {
   const { transactionId } = useParams();
   const transaction = useGlobalStore((state) =>
      state.getTransactionById(transactionId!)
   );
   const changeTransactionCategory = useGlobalStore(
      (state) => state.changeTransactionCategory
   );

   const clickHandler = () => {
      console.log("clicks");

      changeTransactionCategory(transaction, "transport");
   };

   return (
      <>
         <h1>{transaction.description}</h1>
         <p>{transaction.category}</p>
         <button onClick={clickHandler}>Change category to foodTTT</button>
      </>
   );
};
