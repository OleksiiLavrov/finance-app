import { Outlet } from "react-router-dom";
import { Sidebar } from "./modules/sidebar";
export const App: React.FC = () => {
  return (
    <div className="bg-gray-900 overflow-x-hidden">
      <div className="bg-gray-800 my-0 mx-auto 3xl:w-2000 3xl:relative">
        <div className="w-24 h-full 3xl:w-60 3xl:absolute fixed top-0 left-0 group/menu peer/menu bg-gray-900 duration-300 hover:w-60">
          <Sidebar />
        </div>
        <div className="translate-x-24 3xl:translate-x-60 pr-24 3xl:pr-52 text-white peer-hover/menu:translate-x-60 peer-hover/menu:pr-52 duration-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
