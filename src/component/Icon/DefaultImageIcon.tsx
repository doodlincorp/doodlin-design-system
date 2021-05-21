import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IDefaultImageIConProps {
  color?: keyof IColorMap;
  className?: string;
}

export const DefaultImageIcon: React.FC<IDefaultImageIConProps> = ({
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
        width="48"
        height="50"
        viewBox="0 0 48 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="icon__fill"
          d="M41.554 0H6.43747C2.88664 0 0 2.90339 0 6.47482V43.5252C0 47.1052 2.88664 50 6.43747 50H41.554C45.1134 50 47.9915 47.0966 47.9915 43.5252V6.47482C48 2.90339 45.1134 0 41.554 0ZM24.4215 42.0092H18.1458H5.30495L14.859 29.4964L21.2879 37.9068L30.7483 25.5224L43.3507 42.0092H24.4215Z"
          fill={color ? colorMap[color] : colorMap.gray_4}
        />
      </svg>
    </div>
  );
};
