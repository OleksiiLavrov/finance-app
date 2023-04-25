import { IconSvgSelector } from "../../assets/icons/IconSvgSelector";
import { SidebarItem } from "./components/SidebarItem/SidebarItem";
import { menuItems } from "./consts/menuItems";

export const Sidebar = () => {
  return (
    <div className="menu flex flex-col h-full pl-8 py-10 justify-between text-lg font-medium 3xl:fixed 3xl:w-60">
      <div className="relative">
        <IconSvgSelector icon="menu-logo" classname="h-10 w-10" />
        <div className="absolute top-1/2 left-12 -translate-y-1/2">
          <p className="transition-all opacity-0 3xl:opacity-100 duration-300 group-hover/menu:opacity-100 text-yellow-400 text-xl uppercase relative">
            <span className="absolute top-0.5 left-6 text-xl translate-x-0.5">
              eature
            </span>
            <span className="text-5xl">F</span>
            <span>inance</span>
          </p>
        </div>
      </div>
      <ul className="flex flex-col gap-8">
        {menuItems.map((item: string) => (
          <SidebarItem key={`menu-item-${item.toLowerCase()}`} item={item} />
        ))}
      </ul>
      <p className="text-yellow-400 relative">
        <span className="text-gray-400 text-2xl">©</span>
        <span className="absolute top-1/2 left-6 -translate-y-1/2 transition-all opacity-0 3xl:opacity-100 duration-300 group-hover/menu:opacity-100">
          FeatureFinance
        </span>
      </p>
    </div>
  );
};
