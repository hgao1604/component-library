import { twMerge } from "tailwind-merge";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactElement, InputHTMLAttributes } from "react";
import Icon from "../Icon/Icon";
type InputSize = "sm" | "lg";

interface BaseInputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  className?: string;
  /** Disable the input */
  disabled?: boolean;
  /** Set the size of the input */
  size?: InputSize;
  /** Set the icon */
  icon?: IconProp;
  /** Set the prepand content */
  prepand?: string | ReactElement;
  /** Set the append content */
  append?: string | ReactElement;
  children?: React.ReactNode;
}

export const Input: React.FC<BaseInputProps> = (props) => {
  const { className, disabled, size, icon, prepand, append, ...rest } = props;
  return (
    <div
      className={twMerge(
        prepand || append
          ? "group flex items-center overflow-hidden rounded-lg  border border-gray-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
          : ""
      )}
    >
      {prepand && (
        <div
          className={twMerge(
            "inline-block bg-slate-100 px-4 py-2 shadow-md focus:border-transparent focus:outline-none"
          )}
        >
          {prepand}
        </div>
      )}
      <div className="relative">
        <input
          className={twMerge(
            className,
            "inline-block max-w-4xl rounded-lg border px-4 py-2 shadow-md placeholder:text-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary",
            disabled
              ? "pointer-events-none cursor-not-allowed opacity-70 focus:ring-0"
              : "",
            size === "sm" ? "px-3 py-1 text-sm" : "",
            size === "lg" ? "px-6 py-4 text-xl" : "",
            icon ? "pr-8" : "",
            prepand || append ? "rounded-none border-0 focus:ring-0 " : ""
          )}
          {...rest}
        />
        {icon && (
          <div
            className={twMerge(
              "absolute inset-y-0 right-0 flex items-center pr-2",
              size === "lg" ? "pr-4" : ""
            )}
          >
            <Icon
              icon={icon}
              className={twMerge(
                size === "sm" ? "text-sm" : "",
                size === "lg" ? "text-xl" : ""
              )}
            />
          </div>
        )}
      </div>
      {append && (
        <div
          className={twMerge(
            "inline-block bg-slate-100 px-4 py-2 shadow-md focus:border-transparent focus:outline-none"
          )}
        >
          {append}
        </div>
      )}
    </div>
  );
};
