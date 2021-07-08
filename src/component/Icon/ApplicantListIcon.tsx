import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IApplicantListIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const ApplicantListIcon: React.FC<IApplicantListIconProps> = ({
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
          d="M15 11H22V13H15V11ZM16 15H22V17H16V15ZM14 7H22V9H14V7ZM4 19H12H13H14V18C14 15.243 11.757 13 9 13H7C4.243 13 2 15.243 2 18V19H3H4ZM8 12C9.995 12 11.5 10.495 11.5 8.5C11.5 6.505 9.995 5 8 5C6.005 5 4.5 6.505 4.5 8.5C4.5 10.495 6.005 12 8 12Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
