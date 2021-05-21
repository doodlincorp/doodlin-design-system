import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IDocAltIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const DocAltIcon: React.FC<IDocAltIconProps> = ({
  color,
  className,
}) => {
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
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5999 6.41L17.6699 2.32C17.4199 2.11 17.1099 2 16.7899 2H16.6699C16.3899 2 16.1699 2.22 16.1699 2.5V6.75C16.1699 7.42 16.7099 7.97 17.3899 7.97H22.5999C22.8799 7.97 23.0999 7.75 23.0999 7.47C23.0999 7.06 22.9099 6.67 22.5999 6.41Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
        <path
          d="M17.1799 9.56C15.7399 9.56 14.5799 8.4 14.5799 6.96V2H6.8499C5.7699 2 4.8999 2.87 4.8999 3.94V24.06C4.8999 25.13 5.7699 26 6.8499 26H21.1599C22.2299 26 23.0999 25.13 23.0999 24.06V9.56H17.1799ZM17.9999 18.3C17.9999 18.58 17.7799 18.8 17.4999 18.8H14.7999V21.5C14.7999 21.78 14.5799 22 14.2999 22H13.6999C13.4199 22 13.1999 21.78 13.1999 21.5V18.8H10.4999C10.2199 18.8 9.9999 18.58 9.9999 18.3V17.7C9.9999 17.42 10.2199 17.2 10.4999 17.2H13.1999V14.5C13.1999 14.22 13.4199 14 13.6999 14H14.2999C14.5799 14 14.7999 14.22 14.7999 14.5V17.2H17.4999C17.7799 17.2 17.9999 17.42 17.9999 17.7V18.3Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
      </svg>
    </div>
  );
};
