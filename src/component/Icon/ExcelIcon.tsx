import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IExcelIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const ExcelIcon: React.FC<IExcelIconProps> = ({
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
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 4H14.5V7H20V4ZM21 7V8V16V17V20C21 20.5523 20.5523 21 20 21L14.5 21H13.5L8 21C7.44772 21 7 20.5523 7 20V17H3C2.44772 17 2 16.5523 2 16V8C2 7.44772 2.44772 7 3 7H7V4C7 3.44772 7.44772 3 8 3H13.5H14.5H20C20.5523 3 21 3.44772 21 4V7ZM20 12.5V16H14.5V12.5H20ZM13.5 12.5V16H12V12.5H13.5ZM13.5 20V17H11H8V20H13.5ZM20 17H14.5V20H20V17ZM8 7H11H13.5V4H8V7ZM13.5 8H12V11.5H13.5V8ZM20 8H14.5V11.5H20V8ZM6 9H4L6 12L4 15H6L7 13.5L8 15H10L8 12L10 9H8L7 10.5L6 9Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
