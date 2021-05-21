import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IDocumentIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const DocIcon: React.FC<IDocumentIconProps> = ({ color, className }) => {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
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
          d="M9.85994 5.41C9.01994 5.41 8.33994 4.73 8.33994 3.89V1H3.82994C3.19994 1 2.68994 1.51 2.68994 2.13V13.86C2.68994 14.49 3.19994 15 3.82994 15H12.1799C12.8099 15 13.3099 14.49 13.3099 13.87V5.41H9.85994Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          id="icon__fill"
          d="M13.02 3.57L10.14 1.18C10 1.07 9.81002 1 9.63002 1H9.56002C9.40002 1 9.27002 1.13 9.27002 1.29V3.77C9.27002 4.16 9.59002 4.48 9.98002 4.48H13.02C13.18 4.48 13.31 4.35 13.31 4.19C13.31 3.95 13.2 3.73 13.02 3.57Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
      </svg>
    </div>
  );
};
