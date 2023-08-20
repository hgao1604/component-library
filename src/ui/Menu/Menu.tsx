import { twMerge } from "tailwind-merge";
import React, { createContext, useState } from "react";
import { MenuItemProps } from "./MenuItem";
type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  className?: string;
  /** default active menu item */
  defaultIndx?: string;
  /** menu mode */
  mode?: MenuMode;
  /** custom style */
  style?: React.CSSProperties;
  /** callback when menu item is clicked */
  onSelect?: SelectCallback;
  /** default open sub menu */
  children?: React.ReactNode;
  /** default open sub menu */
  defaultOpenSubMenus?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({
  index: "0",
  mode: "horizontal",
});

/**
 * Menu component with two modes, horizontal and vertical,
 * and callback when menu item is clicked, and default active menu item.
 * You can also use MenuItem and SubMenu component to create a menu.
 * ### How to import
 * ### Usage
 * ```js
 * import {Menu} from "highcold-ui";
 * ```
 */

export const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    defaultIndx,
    onSelect,
    children,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setActive] = useState(defaultIndx);

  function handleClick(index: string) {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };
  // check if children is MenuItem or SubMenu
  // pass index to children
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };

  return (
    <ul
      className={twMerge(
        className,
        "flex flex-row flex-wrap items-center justify-center gap-8",
        mode === "vertical" ? "max-w-sm flex-col gap-0" : ""
      )}
      style={style}
      data-testid="test-menu"
    >
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndx: "0",
  mode: "horizontal",
};

export default Menu;
