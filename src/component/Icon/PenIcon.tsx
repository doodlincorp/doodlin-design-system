import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IPenIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const PenIcon: React.FC<IPenIconProps> = ({ color, className }) => {
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
          id="icon__fill"
          d="M2 13.4999C2 13.776 2.22386 13.9999 2.5 13.9999H4.79293C4.92554 13.9999 5.05272 13.9472 5.14648 13.8534L11.3966 7.60335C11.5918 7.40808 11.5918 7.0915 11.3966 6.89624L9.10364 4.60331C8.90838 4.40805 8.59179 4.40805 8.39653 4.60331L2.14645 10.8534C2.05268 10.9472 2 11.0743 2 11.2069V13.4999Z"
          fill={color ? colorMap[color] : colorMap.gray_6}
        />
        <path
          id="icon__fill"
          d="M10.6462 2.35352L9.85355 3.1462C9.65829 3.34146 9.65829 3.65805 9.85355 3.85331L12.1466 6.14632C12.3418 6.34158 12.6584 6.34158 12.8537 6.14632L13.6464 5.35363C13.8416 5.15837 13.8416 4.84179 13.6464 4.64652L11.3533 2.35352C11.1581 2.15825 10.8415 2.15826 10.6462 2.35352Z"
          fill={color ? colorMap[color] : colorMap.gray_6}
        />
      </svg>
    </div>
  );
};

export default PenIcon;
