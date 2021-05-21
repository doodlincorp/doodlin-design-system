import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IReturnIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const ReturnIcon: React.FC<IReturnIconProps> = ({
  color,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
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
          id="icon__fill"
          d="M9.0099 4.43846H4.25743L5.97563 2.79534L5.14395 2L2 5.00656L5.13481 8.00437L5.96649 7.20903L4.24829 5.56591H9.0099C11.112 5.56591 12.8302 7.20029 12.8302 9.21923C12.8302 11.2382 11.1211 12.8725 9.0099 12.8725H3.25209V14H9.0099C11.7609 14 14 11.8587 14 9.22797C14 6.59723 11.7609 4.43846 9.0099 4.43846Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </div>
  );
};
