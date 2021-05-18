import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface ILinkIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const LinkIcon: React.FC<ILinkIconProps> = ({ color, className }) => {
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
          d="M2.81459 13.1855C3.46459 13.8355 4.31792 14.1602 5.17125 14.1602C6.02525 14.1595 6.87925 13.8355 7.52859 13.1855L9.41392 11.2995L8.47125 10.3568L6.58592 12.2428C5.80659 13.0208 4.53792 13.0222 3.75725 12.2428C2.97792 11.4628 2.97792 10.1942 3.75725 9.41417L5.64325 7.52883L4.70059 6.58617L2.81459 8.4715C1.51525 9.77083 1.51525 11.8862 2.81459 13.1855ZM13.1853 7.52883C14.4839 6.2295 14.4839 4.11417 13.1853 2.81483C11.8853 1.51483 9.76992 1.51617 8.47125 2.81483L6.58592 4.70083L7.52859 5.6435L9.41392 3.7575C10.1939 2.9795 11.4626 2.97817 12.2426 3.7575C13.0219 4.5375 13.0219 5.80617 12.2426 6.58617L10.3566 8.4715L11.2993 9.41417L13.1853 7.52883Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
        <path
          d="M5.64258 11.3003L4.69979 10.3575L10.3572 4.70024L11.3 5.64307L5.64258 11.3003Z"
          fill={color ? colorMap[color] : colorMap.gray_7}
        />
      </svg>
    </div>
  );
};
