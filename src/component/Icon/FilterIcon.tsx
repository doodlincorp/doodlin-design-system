import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IFilterIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const FilterIcon: React.FC<IFilterIconProps> = ({
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
          id="filter-icon__color"
          d="M11.347 3H2.47378C2.04966 3 1.84176 3.54886 2.14114 3.87319L5.70874 7.69858V11.8816C5.70874 12.0728 5.7919 12.2475 5.93327 12.3556L7.38027 13.4949C7.67965 13.7361 8.11209 13.5032 8.11209 13.0957V7.69858L11.6797 3.87319C11.9791 3.54886 11.7628 3 11.347 3Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
        <path
          id="filter-icon__color"
          d="M14.5074 8.69663H10.366C10.1331 8.69663 9.9502 8.51368 9.9502 8.28083V7.86502C9.9502 7.63217 10.1331 7.44922 10.366 7.44922H14.5074C14.7403 7.44922 14.9232 7.63217 14.9232 7.86502V8.27251C14.9232 8.50536 14.7403 8.69663 14.5074 8.69663Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
        <path
          id="filter-icon__color"
          d="M13.2678 10.7674H10.3738C10.141 10.7674 9.95801 10.5845 9.95801 10.3516V9.94412C9.95801 9.71127 10.141 9.52832 10.3738 9.52832H13.2678C13.5007 9.52832 13.6836 9.71127 13.6836 9.94412V10.3516C13.6836 10.5845 13.4923 10.7674 13.2678 10.7674Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
        <path
          id="filter-icon__color"
          d="M12.0209 12.8382H10.366C10.1331 12.8382 9.9502 12.6553 9.9502 12.4224V12.0149C9.9502 11.7821 10.1331 11.5991 10.366 11.5991H12.0209C12.2537 11.5991 12.4367 11.7821 12.4367 12.0149V12.4224C12.4367 12.6553 12.2537 12.8382 12.0209 12.8382Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
      </svg>
    </div>
  );
};
