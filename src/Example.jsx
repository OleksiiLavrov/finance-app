import React, { Suspense } from "react";
import { clientService } from "./http/services/clientService";

const FallbackComponent = () => <div>Loading...</div>;

const DataComponent = () => {
   const data = clientService.clientInfo.read();
   return (
      <>
         <div>{data.name}</div>
      </>
   );
};

class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(error) {
      return { hasError: true };
   }

   render() {
      if (this.state.hasError) {
         return <h1>Something went wrong.</h1>;
      }

      return this.props.children;
   }
}

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
