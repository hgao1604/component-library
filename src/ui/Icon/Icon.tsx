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
  theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  return (
    <FontAwesomeIcon
      className={twMerge(className, theme ? `text-${theme}` : "")}
      {...restProps}
    />
  );
};

export default Icon;
