import React, { Suspense } from "react";
import { clientService } from "./http/services/clientService";

const FallbackComponent = () => <div>Loading...</div>;

const DataComponent = () => {
   const data = clientService.clientInfo.read();
   return (
      <>
         <ErrorBoundary fallback={<h1>Error</h1>}>
            <div>{data.name}</div>
         </ErrorBoundary>
      </>
   );
};

class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
   }

   componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
   }

   render() {
      if (this.state.hasError) {
         // You can render any custom fallback UI
         return <h1>Something went wrong.</h1>;
      }

      return this.props.children;
   }
}

export const Example = () => {
   return (
      <>
         <Suspense fallback={<FallbackComponent />}>
            <DataComponent />
         </Suspense>
      </>
   );
};
