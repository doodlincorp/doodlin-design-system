import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IDownloadIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const DownloadIcon: React.FC<IDownloadIconProps> = ({
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
          d="M11.2003 6.9125L8.66426 9.4485V2.3125H7.32826V9.4565L4.80826 6.9285L3.86426 7.8725L7.99226 12.0005L12.1363 7.8485L11.2003 6.9125Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
        <path
          id="icon__fill"
          d="M13.2882 13.7925H2.71217C2.08017 13.7925 1.57617 13.2805 1.57617 12.6565V10.0645H2.90417V12.4725H13.1042V10.0645H14.4322V12.6565C14.4322 13.2805 13.9202 13.7925 13.2882 13.7925Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
      </svg>
    </div>
  );
};
