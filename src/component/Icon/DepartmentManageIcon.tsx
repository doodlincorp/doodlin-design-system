import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IDepartmentManageIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const DepartmentManageIcon: React.FC<IDepartmentManageIconProps> = ({
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
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M16 1.30414H12.9006C12.6478 0.545556 11.9501 0 11.1259 0C10.3018 0 9.60657 0.545556 9.35377 1.30414H0V2.55112H9.35377C9.60657 3.3097 10.3043 3.85526 11.1259 3.85526C11.9475 3.85526 12.6453 3.3097 12.8981 2.55112H15.9975V1.30414H16Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
          <path
            d="M16 11.4515H12.9006C12.6478 10.6929 11.9501 10.1473 11.1285 10.1473C10.3068 10.1473 9.60657 10.6929 9.35377 11.4515H0V12.6985H9.35377C9.60657 13.457 10.3043 14.0026 11.1259 14.0026C11.9475 14.0026 12.6453 13.457 12.8981 12.6985H15.9975V11.4515H16Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
          <path
            d="M0 7.62473H3.09938C3.35219 8.38331 4.04993 8.92887 4.87154 8.92887C5.69316 8.92887 6.3909 8.38331 6.6437 7.62473H15.9975V6.37775H6.6437C6.3909 5.61916 5.69316 5.07361 4.87154 5.07361C4.04993 5.07361 3.35219 5.61916 3.09938 6.37775H0V7.62473Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="16" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
