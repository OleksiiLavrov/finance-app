import { Outlet } from "react-router-dom";
import { Sidebar } from "./modules/sidebar";
export const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="h-full w-24 fixed top-0 left-0 group/menu peer/menu bg-gray-800 duration-300 hover:w-60">
        <Sidebar />
      </div>
      <div className="translate-x-24 pl-10 pr-60 peer-hover/menu:translate-x-60 duration-300">
        <Outlet />
      </div>
    </div>
  );
};
