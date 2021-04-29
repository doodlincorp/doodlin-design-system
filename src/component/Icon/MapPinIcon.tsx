import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IMapPinIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const MapPinIcon: React.FC<IMapPinIconProps> = ({
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
          d="M12.5347 6.06557C12.5347 3.56076 10.5039 1.53003 7.99911 1.53003C5.4943 1.53003 3.46356 3.56076 3.46356 6.06557C3.46356 6.2407 3.47418 6.41228 3.49363 6.5821C3.49363 6.5821 3.65107 9.72727 7.99911 14.468C12.3489 9.72903 12.5063 6.58387 12.5063 6.58387C12.524 6.41228 12.5347 6.2407 12.5347 6.06557ZM7.99911 7.70891C7.09164 7.70891 6.35577 6.97304 6.35577 6.06557C6.35577 5.15811 7.09164 4.42224 7.99911 4.42224C8.90657 4.42224 9.64245 5.15811 9.64245 6.06557C9.64245 6.97304 8.90657 7.70891 7.99911 7.70891Z"
          fill={color ? colorMap[color] : colorMap.gray_6}
        />
      </svg>
    </div>
  );
};
