import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface ISearchIConProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const SearchIcon: React.FC<ISearchIConProps> = ({
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
          d="M10 18C11.846 18 13.543 17.365 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.365 13.543 18 11.846 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
