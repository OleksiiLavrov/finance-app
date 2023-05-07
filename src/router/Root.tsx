import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "../App";
import { Example } from "../Example";
import { DashboardPage, TransactionPage } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/dashboard" element={<DashboardPage />} />
      <Route path="/transactions" element={<TransactionPage />} />
      <Route path="/wallet" element={<Example />} />
    </Route>
  )
);
