import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IFileUploadIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const FileUploadIcon: React.FC<IFileUploadIconProps> = ({
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
          d="M9.91174 2.20711L13.1458 5.44118H9.91174V2.20711Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
          stroke={color ? colorMap[color] : colorMap.gray_8}
          strokeLinejoin="round"
        />
        <path
          d="M10.6471 8.00037H5.70593L8.17652 5.52979L10.6471 8.00037Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
        <rect
          x="7.76479"
          y="7.9999"
          width="0.823529"
          height="2.47059"
          fill={color ? colorMap[color] : colorMap.gray_8}
          stroke={color ? colorMap[color] : colorMap.gray_8}
          strokeWidth="0.823529"
        />
        <path
          d="M10.0282 1.5L13.8529 5.32475V14.5H2.5V1.5H10.0282Z"
          stroke={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </div>
  );
};
