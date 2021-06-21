import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface ICopyIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const CopyIcon: React.FC<ICopyIconProps> = ({
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 2H20C21.103 2 22 2.897 22 4V16C22 17.103 21.103 18 20 18H8C6.897 18 6 17.103 6 16V4C6 2.897 6.897 2 8 2ZM15 11H18V9H15V6H13V9H10V11H13V14H15V11ZM16 20V22H4C2.897 22 2 21.103 2 20V8H4V20H16Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
