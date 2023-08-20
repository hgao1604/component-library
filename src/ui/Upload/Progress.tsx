import React from "react";
import { ThemeProps } from "../Icon/Icon";

interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

export const Progress: React.FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, styles, theme } = props;
  return (
    <div>
      <div
        className="relative w-full overflow-hidden rounded-lg bg-slate-200"
        style={{ height: `${strokeHeight}px`, ...styles }}
      >
        <div
          className={`absolute bottom-0 left-0 top-0 flex  items-center justify-end rounded-lg  bg-primary transition-all duration-300`}
          style={{ width: `${percent}%`, background: "#22c55e" }}
        >
          {showText && (
            <span className="px-4 font-mono text-sm font-semibold text-slate-700">
              {percent}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary",
};

export default Progress;
