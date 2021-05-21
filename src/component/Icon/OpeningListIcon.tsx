import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IOpeningListIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const OpeningListIcon: React.FC<IOpeningListIconProps> = ({
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
          d="M12 3H2V5H12V3Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          id="icon__fill"
          d="M14 7H2V9H14V7Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          id="icon__fill"
          d="M10 11H2V13H10V11Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
      </svg>
    </div>
  );
};
