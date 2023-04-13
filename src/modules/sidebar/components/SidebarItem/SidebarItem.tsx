import "./index.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconSvgSelector } from "../../../../assets/icons/IconSvgSelector";

export const SidebarItem = (props: { item: string }) => {
  // const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <li>
      <NavLink
        to={`/${props.item.toLowerCase()}`}
        className="menu-item group/menuItem"
      >
        <div className="relative">
          <IconSvgSelector
            icon={`menu-${props.item.toLowerCase()}`}
            classname="h-7 w-7 transition-all duration-300 hover:duration-300
          group-hover/menuItem:fill-yellow-400"
          />
          <span
            className="absolute top-1/2 left-12 -translate-y-1/2 opacity-0 duration-300 
          group-hover/menuItem:text-yellow-400 group-hover/menu:opacity-100"
          >
            {props.item}
          </span>
        </div>
      </NavLink>
    </li>
  );
};
