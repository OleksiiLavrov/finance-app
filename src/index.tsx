import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router/Root";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);
