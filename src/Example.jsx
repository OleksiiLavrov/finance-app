import { Suspense } from "react";
import { clientService } from "./http/services/clientService";
import { ErrorBoundary } from "react-error-boundary";

const FallbackComponent = () => <div>Loading...</div>;

const DataComponent = () => {
   // const data = clientService.clientInfo.read();
   return <>{/* <div>{data.name}</div> */}Example</>;
};

export const Example = () => {
   const obj = {
      value: "str1",
   };
   return (
      <>
         <button
            onClick={() => {
               obj.value = "str2";
               console.log(obj);
            }}
         >
            Clcik
         </button>
      </>
   );
};
