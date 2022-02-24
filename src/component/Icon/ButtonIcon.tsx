import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IButtonIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({
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
          d="M5 7C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15V9C21 7.89543 20.1046 7 19 7H5ZM16.5 11H7.5V13H16.5V11Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
