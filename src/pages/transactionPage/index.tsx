import { useParams } from "react-router";

export const TransactionPage = () => {
   const { transactionId } = useParams();

   return (
      <>
         <p>{transactionId}</p>
      </>
   );
};
