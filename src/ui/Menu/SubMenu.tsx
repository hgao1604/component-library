import React, { useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";
import Icon from "../Icon/Icon";

export interface SubMenuProps {
  className?: string;
  index?: string;
  title: string;
  children?: React.ReactNode;
}

export const SubMenu: React.FC<SubMenuProps> = (props) => {
  const context = useContext(MenuContext);
  const { className, index, title, children } = props;
  const [menuOpen, setMenuOpen] = useState(
    index === undefined ? false : context.defaultOpenSubMenus?.includes(index)
  );

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
        //return childElement;
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
    return (
      <ul
        className={twMerge(
          " flex  origin-top transform flex-col items-center justify-center rounded-sm border bg-white transition duration-300 ease-in-out",
          context.mode !== "vertical"
            ? "absolute mt-2 scale-0 group-hover:scale-100"
            : "",
          context.mode === "vertical" && !menuOpen ? "hidden " : "",
          context.mode === "vertical" && menuOpen ? "group:block" : ""
        )}
      >
        {childrenComponent}
      </ul>
    );
  };

  return (
    <li
      className={twMerge(
        className,
        "hover:underline-primary active:underline-primary  cursor-pointer flex-col  items-center font-mono font-semibold text-dark transition-all hover:text-primary focus:outline-none",
        context.mode !== "vertical"
          ? "hover:underline hover:underline-offset-8"
          : "",
        context.index === index && context.mode !== "vertical"
          ? "underline-primary text-primary underline underline-offset-8"
          : "",
        context.mode === "vertical"
          ? "underline-none hover:underline-none rounded-sm bg-transparent hover:bg-slate-100"
          : "",
        context.mode === "vertical" && context.index === index
          ? "bg-slate-100 text-primary"
          : ""
      )}
      key={index}
    >
      <div className="group">
        <div
          className={twMerge(
            "flex items-center gap-2",
            context.mode === "vertical" ? "px-6 py-3" : ""
          )}
          onClick={handleClick}
        >
          {title}
          <Icon
            icon="arrow-down"
            size="sm"
            className={twMerge(
              "transform transition-all duration-200 ease-in-out",
              context.mode === "vertical" && menuOpen ? "rotate-180" : "",
              context.mode !== "vertical" ? "group-hover:rotate-180" : ""
            )}
          ></Icon>
        </div>
        {renderChildren()}
      </div>
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
