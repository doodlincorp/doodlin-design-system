import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IPaintRollIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const PaintRollIcon: React.FC<IPaintRollIconProps> = ({
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
          d="M7 2H18C19.103 2 20 2.897 20 4V7C20 8.103 19.103 9 18 9H7C5.897 9 5 8.103 5 7V4C5 2.897 5.897 2 7 2ZM7 4V7H18.002L18 4H7ZM13 13V15C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V21C14 21.2652 13.8946 21.5196 13.7071 21.7071C13.5196 21.8946 13.2652 22 13 22H11C10.7348 22 10.4804 21.8946 10.2929 21.7071C10.1054 21.5196 10 21.2652 10 21V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15V13H4C2.897 13 2 12.103 2 11V7C2 5.897 2.897 5 4 5V11H11C12.103 11 13 11.897 13 13Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  );
};
