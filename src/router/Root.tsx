import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
} from "react-router-dom";
import { App } from "../App";
import { DashboardPage, TransactionsPage, TransactionPage } from "../pages";
import { Example } from "../Example";

export const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<App />}>
         <Route index path="/dashboard" element={<DashboardPage />} />
         <Route path="/transactions" element={<TransactionsPage />} />
         <Route
            path="/transactions/:transactionId"
            element={<TransactionPage />}
         />
         <Route path="/wallet" element={<Example />} />
      </Route>
   )
);
