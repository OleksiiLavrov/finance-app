import { Suspense } from "react";
import { clientService } from "./http/services/clientService";
import { ErrorBoundary } from "react-error-boundary";

const FallbackComponent = () => <div>Loading...</div>;

const DataComponent = () => {
   const data = clientService.clientInfo.read();
   return (
      <>
         <div>{data.name}</div>
      </>
   );
};

export const Example = () => {
   return (
      <>
         <ErrorBoundary fallback={<h1>Error</h1>}>
            <Suspense fallback={<FallbackComponent />}>
               <DataComponent />
            </Suspense>
         </ErrorBoundary>
      </>
   );
};
