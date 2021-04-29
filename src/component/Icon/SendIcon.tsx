import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface ISendIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const SendIcon: React.FC<ISendIconProps> = ({ color, className }) => {
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
          d="M10.7704 14.0298L15.4704 0.529785L1.97039 5.22978L0.400391 5.77979L1.99039 6.27979L7.86039 8.13979L9.72039 14.0098L10.2204 15.5998L10.7704 14.0298ZM8.12039 7.16979L3.57039 5.72978L12.7704 2.52979L8.12039 7.16979ZM8.83039 7.87979L13.4704 3.23979L10.2704 12.4398L8.83039 7.87979Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
      </svg>
    </div>
  );
};
