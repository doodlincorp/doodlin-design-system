import React from "react";
import { colorMap, IColorMap } from "../colorMap";

export interface IAttachmentsTabIconProps {
  color?: keyof IColorMap;
  className?: string;
}

export const AttachmentsTabIcon: React.FC<IAttachmentsTabIconProps> = ({
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
          d="M11.5099 11.5601H10.1199V12.9501H11.5099V11.5601Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
        <path
          d="M12.4499 1H3.5399C2.4899 1 1.6499 1.85 1.6499 2.89V13.1C1.6499 14.15 2.4999 14.99 3.5399 14.99H12.4499C13.4999 14.99 14.3399 14.14 14.3399 13.1V2.9C14.3499 1.85 13.4999 1 12.4499 1ZM3.5399 2.3H12.4499C12.7799 2.3 13.0499 2.57 13.0499 2.9V9.6H2.9499V2.9C2.9499 2.57 3.2099 2.3 3.5399 2.3ZM12.4499 13.7H3.5399C3.2099 13.7 2.9399 13.43 2.9399 13.1V10.89H13.0399V13.1C13.0499 13.44 12.7799 13.7 12.4499 13.7Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </div>
  );
};
