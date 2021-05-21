import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IEvaluationsTabIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const EvaluationsTabIcon: React.FC<IEvaluationsTabIconProps> = ({
  color,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 2.18C11.21 2.18 13.82 4.79 13.82 8C13.82 11.21 11.21 13.82 8 13.82C4.79 13.82 2.19 11.21 2.19 8C2.19 4.79 4.8 2.18 8 2.18ZM8 1C4.13 1 1 4.13 1 8C1 11.87 4.13 15 8 15C11.87 15 15 11.87 15 8C15 4.13 11.87 1 8 1Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
        <path
          d="M7.99998 3.55005V8.00005L4.84998 11.15C5.65998 11.96 6.76998 12.45 7.99998 12.45C10.46 12.45 12.45 10.46 12.45 8.00005C12.45 5.54005 10.46 3.55005 7.99998 3.55005Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </div>
  );
};
