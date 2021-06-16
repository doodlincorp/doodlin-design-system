import React from "react";
import { colorMap, IColorMap } from "../colorMap";
import "../index.scss";
import cn from "classnames";

export interface IPickerToggleIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const PickerToggleIcon: React.FC<IPickerToggleIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
}) => {
  return (
    <i
      className={cn("dds-icon", className, { flip })}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
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
          d="M14.92 9.20007L7 7.07007L9.12 15.0001L11.15 12.1801L14.07 15.0901L15.08 14.0801L12.18 11.1701L14.92 9.20007Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          id="icon__fill"
          d="M6.04 13.03H2.99V3H13.02V6.05H14.02V3C14.02 2.45 13.57 2 13.02 2H3C2.45 2 2 2.45 2 3V13.03C2 13.58 2.45 14.03 3 14.03H6.04V13.03Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
      </svg>
    </i>
  );
};
