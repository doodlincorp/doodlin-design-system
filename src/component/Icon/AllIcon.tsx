import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IAllIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const AllIcon: React.FC<IAllIconProps> = ({
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
          d="M6.74258 13.2325L5.80224 8.7367H5.77499L4.83465 13.2325H6.74258ZM7.00152 7L9.57723 17H7.53301L7.08329 14.8852H4.49394L4.04422 17H2L4.57571 7H7.00152Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
        <path
          id="icon__fill"
          d="M10.2541 17H15.6917V15.3473H12.2165V7H10.2541V17Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
        <path
          id="icon__fill"
          d="M16.5624 17H22V15.3473H18.5248V7H16.5624V17Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
