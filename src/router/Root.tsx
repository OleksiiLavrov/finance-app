import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "../App";
import { Example } from "../Example";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/dashboard" element={<Example />} />
      <Route path="/transactions" element={<Example />} />
      <Route path="/wallet" element={<Example />} />
    </Route>
  )
);
