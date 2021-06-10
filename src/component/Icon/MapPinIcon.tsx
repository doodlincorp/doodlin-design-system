import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IMapPinIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const MapPinIcon: React.FC<IMapPinIconProps> = ({
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
          id="icon__fill"
          d="M8.00001 1.33325C5.05935 1.33325 2.66668 3.72592 2.66668 6.66325C2.64735 10.9599 7.79735 14.5226 8.00001 14.6666C8.00001 14.6666 13.3527 10.9599 13.3333 6.66659C13.3333 3.72592 10.9407 1.33325 8.00001 1.33325ZM8.00001 9.33325C6.52668 9.33325 5.33335 8.13992 5.33335 6.66659C5.33335 5.19325 6.52668 3.99992 8.00001 3.99992C9.47335 3.99992 10.6667 5.19325 10.6667 6.66659C10.6667 8.13992 9.47335 9.33325 8.00001 9.33325Z"
          fill={color ? colorMap[color] : colorMap.gray_6}
        />
      </svg>
    </div>
  );
};
