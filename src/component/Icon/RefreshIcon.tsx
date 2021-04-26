import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IRefreshIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const RefreshIcon: React.FC<IRefreshIconProps> = ({
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
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.43799 2C7.70547 2 6.98016 2.14428 6.30341 2.4246C5.62665 2.70492 5.01171 3.11579 4.49374 3.63376C3.97578 4.15172 3.56493 4.76664 3.28461 5.44339C3.00429 6.12014 2.85999 6.84549 2.85999 7.578H1L3.552 10.367L6.104 7.578H4.16101C4.16233 6.44408 4.61335 5.35697 5.41516 4.55517C6.21697 3.75336 7.30406 3.30233 8.43799 3.301C9.57191 3.30233 10.659 3.75336 11.4608 4.55517C12.2627 5.35697 12.7137 6.44408 12.715 7.578C12.7137 8.71193 12.2627 9.79903 11.4608 10.6008C10.659 11.4026 9.57191 11.8537 8.43799 11.855V13.155C9.1705 13.155 9.89585 13.0107 10.5726 12.7304C11.2494 12.4501 11.8643 12.0392 12.3822 11.5212C12.9002 11.0033 13.3111 10.3884 13.5914 9.71161C13.8717 9.03485 14.016 8.30952 14.016 7.577C14.0157 6.0978 13.4279 4.67927 12.3819 3.63341C11.3358 2.58755 9.91719 2 8.43799 2Z"
          fill={color ? colorMap[color] : colorMap.gray_5}
        />
      </svg>
    </div>
  );
};
