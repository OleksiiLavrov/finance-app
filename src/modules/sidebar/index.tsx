import { menuItems } from "./consts/menuItems";
import { Copyright, LogoText, SidebarItem } from "./ui";

export const Sidebar = () => {
   return (
      <div className="menu flex flex-col h-full pl-8 py-10 justify-between text-lg font-medium 3xl:fixed 3xl:w-60">
         <LogoText />
         <ul className="flex flex-col gap-8">
            {menuItems.map((item: string) => (
               <SidebarItem
                  key={`menu-item-${item.toLowerCase()}`}
                  item={item}
               />
            ))}
         </ul>
         <Copyright />
      </div>
   );
};
