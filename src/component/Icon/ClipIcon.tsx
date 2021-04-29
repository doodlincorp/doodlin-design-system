import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IClipIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const ClipIcon: React.FC<IClipIconProps> = ({ color, className }) => {
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
          id="clip-icon__color"
          d="M19.6182 10.0546L12.0091 17.6637C10.4637 19.2092 7.94551 19.2092 6.40006 17.6637C4.8546 16.1183 4.8546 13.6001 6.40006 12.0546L13.4091 5.04554C14.3455 4.10918 15.8637 4.10918 16.8001 5.04554C17.7364 5.98191 17.7364 7.50009 16.8001 8.43645L9.70006 15.5365C9.37278 15.8637 8.8546 15.8637 8.52733 15.5365C8.20006 15.2092 8.20006 14.691 8.52733 14.3637L15.6364 7.25463L14.6273 6.24554L7.52733 13.3455C6.6546 14.2274 6.6546 15.6455 7.52733 16.5274C8.40006 17.4092 9.82733 17.4092 10.7091 16.5274L17.8091 9.42736C19.3001 7.93645 19.3001 5.51827 17.8091 4.02736C16.3182 2.53645 13.9001 2.53645 12.4091 4.02736L5.40006 11.0455C3.29096 13.1546 3.29096 16.5637 5.40006 18.6728C7.50915 20.7819 10.9182 20.7819 13.0273 18.6728L20.6364 11.0637L19.6182 10.0546Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
      </svg>
    </div>
  );
};
