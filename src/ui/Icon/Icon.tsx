import { twMerge } from "tailwind-merge";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface IconProps extends FontAwesomeIconProps {
  /** theme of the icon */
  theme?: ThemeProps;
}

export const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  //const finalClassName = [className, theme ? `text-${theme}` : ""].join(" ");
  //className={twMerge(className, theme ? `text-${theme}` : "")}
  return (
    <FontAwesomeIcon
      className={twMerge(
        className,
        theme && theme == "primary" ? "text-primary" : "",
        theme && theme == "secondary" ? "text-secondary" : "",
        theme && theme == "success" ? "text-success" : "",
        theme && theme == "info" ? "text-info" : "",
        theme && theme == "warning" ? "text-warning" : "",
        theme && theme == "danger" ? "text-danger" : "",
        theme && theme == "light" ? "text-light" : "",
        theme && theme == "dark" ? "text-dark" : ""
      )}
      {...restProps}
    />
  );
};

export default Icon;
