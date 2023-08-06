import { twMerge } from "tailwind-merge";
import { MenuContext } from "./Menu";
import { useContext } from "react";

export interface MenuItemProps {
  children?: React.ReactNode;
  className?: string;
  index?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, className, disabled, style, index } = props;
  const context = useContext(MenuContext);
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "string") {
      context.onSelect(index);
    }
  };
  return (
    <li
      className={twMerge(
        className,
        "hover:underline-primary active:underline-primary block cursor-pointer px-6 py-3 font-mono font-semibold  text-dark transition-all hover:text-primary focus:outline-none",
        context.mode !== "vertical"
          ? "hover:underline hover:underline-offset-8"
          : "",
        context.index === index && context.mode !== "vertical"
          ? "underline-primary text-primary underline underline-offset-8"
          : "",
        context.mode === "vertical"
          ? "underline-none hover:underline-none rounded-lg bg-transparent hover:bg-slate-100"
          : "",
        context.mode === "vertical" && context.index === index
          ? "bg-slate-100 text-primary"
          : "",
        disabled ? "pointer-events-none cursor-not-allowed opacity-70" : "",
      )}
      style={style}
      aria-disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </li>
  );
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
