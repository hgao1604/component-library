import { twMerge } from "tailwind-merge";

export type ButtonSize = "sm" | "lg";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  /** Disable the button */
  disabled?: boolean;
  /** Set the size of the button */
  size?: ButtonSize;
  /** Set the type of the button */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 * The most common component of any UI library is the button. This
 * is a simple button component suporting HTML button and anchor
 * elements.
 * ### Usage
 * ```js
 * import {Button} from "highcold-ui";
 * ```
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, href, ...restProps } =
    props;
  if (btnType === "link" && href) {
    return (
      <a
        className={twMerge(
          className,
          "underline-slate-700 relative inline-block font-mono uppercase text-slate-700 underline underline-offset-8 disabled:cursor-not-allowed disabled:opacity-70",
          size === "sm" ? "px-4 py-2 text-xs" : "",
          size === "lg" ? "px-12 py-4 text-xl" : ""
        )}
        href={href}
        aria-disabled={disabled}
        {...restProps}
      >
        {children}
      </a>
    );
  }
  return (
    <>
      <button
        className={twMerge(
          className,
          "relative inline-block rounded-lg bg-slate-300	px-8 py-2 font-mono font-semibold uppercase text-slate-700 shadow-md  transition-all duration-300 hover:-translate-y-[3px] hover:bg-slate-200 hover:shadow-lg focus:outline-none active:-translate-y-[1px] active:bg-slate-300 disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-primary disabled:opacity-70 disabled:shadow-none disabled:hover:shadow-none disabled:active:translate-y-0",
          btnType === "primary"
            ? "bg-primary text-slate-100 hover:bg-green-400 active:bg-primary"
            : "",
          btnType === "danger"
            ? "bg-danger text-slate-100 hover:bg-red-500 active:bg-danger"
            : "",
          size === "sm" ? "rounded-md px-4 py-2 text-xs" : "",
          size === "lg" ? "rounded-xl px-12 py-4 text-xl" : ""
        )}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
