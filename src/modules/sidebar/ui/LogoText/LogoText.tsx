import { IconSvgSelector } from "../../../../assets/icons/IconSvgSelector";

export const LogoText = () => {
   return (
      <div className="relative">
         <IconSvgSelector icon="menu-logo" classname="h-10 w-10" />
         <div className="absolute top-1/2 left-12 -translate-y-1/2">
            <p
               className="transition-all opacity-0 text-yellow-400 text-xl uppercase relative
             3xl:opacity-100 duration-300 group-hover/menu:opacity-100"
            >
               <span className="absolute top-0.5 left-6 text-xl translate-x-0.5">
                  eature
               </span>
               <span className="text-5xl">F</span>
               <span>inance</span>
            </p>
         </div>
      </div>
   );
};
