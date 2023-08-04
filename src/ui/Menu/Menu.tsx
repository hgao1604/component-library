import { twMerge } from "tailwind-merge";
import React, { createContext, useState } from "react";
import { MenuItemProps } from "./MenuItem";
type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  className?: string;
  defaultIndx?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  children?: React.ReactNode;
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

const Menu: React.FC<MenuProps> = (props) => {
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
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, { index: index.toString() });
        //return childElement;
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component",
        );
      }
    });
  };

  return (
    <ul
      className={twMerge(
        className,
        "flex flex-row flex-wrap items-center justify-center gap-8",
        mode === "vertical" ? "flex-col gap-0" : "",
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
