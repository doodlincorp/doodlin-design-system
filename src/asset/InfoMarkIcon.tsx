import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IInfoMarkIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const InfoMarkIcon: React.FC<IInfoMarkIconProps> = ({
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
        <g clip-path="url(#clip0)">
          <path
            d="M8 14.3936C4.4739 14.3936 1.60643 11.5261 1.60643 8C1.60643 4.4739 4.47389 1.60643 8 1.60643C11.5261 1.60643 14.3936 4.46586 14.3936 8C14.3936 11.5341 11.5261 14.3936 8 14.3936ZM8 16C12.4177 16 16 12.4177 16 8C16 3.58233 12.4177 1.26685e-06 8 1.65306e-06C3.58233 2.03926e-06 -1.31913e-07 3.58233 2.54292e-07 8C-0.00803216 12.4177 3.5743 16 8 16Z"
            fill={color ? colorMap[color] : colorMap.blue_4}
          />
          <path
            d="M7.22934 5.60645L8.83496 5.60645L8.83496 4.00083L7.22934 4.00083L7.22934 5.60645Z"
            fill={color ? colorMap[color] : colorMap.blue_4}
          />
          <path
            d="M7.22854 12.3774L8.83496 12.3774L8.83496 7.37493L7.22853 7.37493L7.22854 12.3774Z"
            fill={color ? colorMap[color] : colorMap.blue_4}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(16 16) rotate(180)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
