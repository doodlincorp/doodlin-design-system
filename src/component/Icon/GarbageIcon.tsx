import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IGarbageIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const GarbageIcon: React.FC<IGarbageIconProps> = ({
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
          id="icon__color"
          d="M10.6 2.2V1.3H5.4V2.2H2.8V4H13.3V2.2H10.6Z"
          fill={color ? colorMap[color] : colorMap.red_7}
        />
        <path
          id="icon__color"
          d="M3.60001 5.3H12.4V13C12.4 13.5 12.2 13.9 11.9 14.2C11.6 14.5 11.1 14.7 10.7 14.7H5.40001C4.90001 14.7 4.50001 14.5 4.20001 14.2C3.90001 13.9 3.70001 13.4 3.70001 13V5.3H3.60001Z"
          fill={color ? colorMap[color] : colorMap.red_7}
        />
      </svg>
    </div>
  );
};
