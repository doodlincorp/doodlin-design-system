import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IMemoIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const MemoIcon: React.FC<IMemoIconProps> = ({ color, className }) => {
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="icon__fill"
          d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM14 15H7V13H14V15ZM17 11H7V9H17V11ZM17 7H7V5H17V7Z"
          fill={color ? colorMap[color] : colorMap["yellow_6"]}
        />
      </svg>
    </div>
  );
};
