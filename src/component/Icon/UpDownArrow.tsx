import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IUpDownArrowIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const UpDownArrowIcon: React.FC<IUpDownArrowIconProps> = ({
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
          d="M12 3L6 9H18L12 3ZM12 21L18 15L6 15L12 21Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
