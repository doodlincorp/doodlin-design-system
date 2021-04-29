import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface ICloseIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const CloseIcon: React.FC<ICloseIconProps> = ({ color, className }) => {
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
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
      >
        <path
          id="패스_48"
          data-name="패스 48"
          d="M91.707,78.707l-1.414-1.414L85,82.586l-5.293-5.293-1.414,1.414L83.586,84l-5.293,5.293,1.414,1.414L85,85.414l5.293,5.293,1.414-1.414L86.414,84Z"
          transform="translate(-78.293 -77.293)"
          fill={color ? colorMap[color] : colorMap.gray_6}
        />
      </svg>
    </div>
  );
};
