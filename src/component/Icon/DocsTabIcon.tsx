import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IDocsTabIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const DocsTabIcon: React.FC<IDocsTabIconProps> = ({
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
          d="M7.22023 5.27002H4.42023V6.57002H7.22023V5.27002Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
        <path
          d="M11.4802 8.09009H4.42023V9.39009H11.4802V8.09009Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
        <path
          d="M11.4802 10.8999H4.42023V12.1999H11.4802V10.8999Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
        <path
          d="M14.2502 5.27C14.2202 5.05 14.1702 4.83 14.1102 4.61C13.5802 2.73 11.9602 1.3 9.98021 1.04C9.77021 1.01 9.55021 1 9.33021 1H8.6802H3.62021C2.56021 1 1.71021 1.86 1.71021 2.91V13.09C1.71021 14.15 2.57021 15 3.62021 15H12.3902C13.4502 15 14.3002 14.14 14.3002 13.09V5.97C14.3002 5.73 14.2802 5.5 14.2502 5.27ZM12.7402 4.62H9.98021V2.37C11.2402 2.59 12.2802 3.46 12.7402 4.62ZM13.0002 13.09C13.0002 13.43 12.7202 13.7 12.3902 13.7H3.62021C3.28021 13.7 3.01021 13.42 3.01021 13.09V2.91C3.01021 2.57 3.29021 2.3 3.62021 2.3H8.6802V5.91H13.0002C13.0002 5.93 13.0002 5.95 13.0002 5.96V13.09Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </div>
  );
};
