import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface ICopyIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const CopyIcon: React.FC<ICopyIconProps> = ({ color, className }) => {
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
          d="M13.7504 3.64941H13.7104H12.3504H4.64039C4.09039 3.64941 3.65039 4.08941 3.65039 4.63941V12.3494V13.7094V13.7494C3.65039 14.2994 4.09039 14.7394 4.64039 14.7394H13.7504C14.3004 14.7394 14.7404 14.2994 14.7404 13.7494V4.63941C14.7404 4.08941 14.3004 3.64941 13.7504 3.64941ZM12.0704 9.78941H9.79039V12.0694H8.60039V9.78941H6.32039V8.59941H8.60039V6.31941H9.79039V8.59941H12.0704V9.78941Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
        <path
          id="icon__fill"
          d="M3.60977 2.61977H12.3498V2.24977C12.3498 1.69977 11.9098 1.25977 11.3598 1.25977H2.24977C1.69977 1.25977 1.25977 1.69977 1.25977 2.24977V11.3598C1.25977 11.9098 1.69977 12.3498 2.24977 12.3498H2.61977V3.60977C2.61977 3.05977 3.05977 2.61977 3.60977 2.61977Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
      </svg>
    </div>
  );
};
