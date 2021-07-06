import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IChartIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "pie" | "doughnut" | "bar";
}

export const ChartIcon: React.FC<IChartIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "pie",
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
      {variant === "pie" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10.2583 17.7416C9.31408 17.4552 8.45507 16.9403 7.75737 16.2426L12 12V6C12.9867 6 13.9582 6.24334 14.8284 6.70847C15.6986 7.1736 16.4406 7.84616 16.9888 8.66658C17.537 9.48699 17.8744 10.4299 17.9711 11.4119C18.0678 12.3939 17.9209 13.3845 17.5433 14.2961C17.1657 15.2077 16.5691 16.0121 15.8064 16.6381C15.0436 17.264 14.1383 17.6922 13.1705 17.8847C12.2028 18.0772 11.2025 18.0281 10.2583 17.7416Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
      {variant === "doughnut" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.7994 13.8207C17.9495 13.3562 18.3574 13 18.8454 13H20.8952C21.4867 13 21.9532 13.513 21.8293 14.0915C20.8645 18.5979 16.8471 21.949 12.051 21.949C6.53703 21.949 2.05103 17.463 2.05103 11.949C2.05103 7.1529 5.40212 3.13555 9.90853 2.1707C10.487 2.04684 11 2.51329 11 3.10487V5.1546C11 5.64268 10.6438 6.05057 10.1793 6.20058C7.76798 6.97943 6.05103 9.27638 6.05103 11.949C6.05103 15.258 8.74203 17.949 12.051 17.949C14.7237 17.949 17.0206 16.2321 17.7994 13.8207ZM13.8205 6.2012C13.3561 6.05088 13 5.64268 13 5.1546V3.10483C13 2.51327 13.5129 2.0469 14.0913 2.17116C17.9366 2.99734 21.0027 6.06339 21.8288 9.90871C21.9531 10.4871 21.4867 11 20.8952 11H18.8454C18.3573 11 17.9491 10.6439 17.7988 10.1795C17.1965 8.31889 15.6811 6.80355 13.8205 6.2012Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
      {variant === "bar" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.5 19C9.5 19.5523 9.94772 20 10.5 20H13.5C14.0523 20 14.5 19.5523 14.5 19V4C14.5 3.44772 14.0523 3 13.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4V19ZM2 9C2 8.44771 2.44772 8 3 8H6C6.55228 8 7 8.44772 7 9V19C7 19.5523 6.55228 20 6 20H3C2.44772 20 2 19.5523 2 19V9ZM17 9C17 8.44771 17.4477 8 18 8H21C21.5523 8 22 8.44772 22 9V19C22 19.5523 21.5523 20 21 20H18C17.4477 20 17 19.5523 17 19V9Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
