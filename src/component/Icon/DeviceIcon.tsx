import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IDeviceIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "pc" | "mobile";
}

export const DeviceIcon: React.FC<IDeviceIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "pc",
}) => {
  return (
    <i
      className={cn("dds-icon", className, { flip })}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {variant === "pc" && (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6667 2.5H3.33333C2.41416 2.5 1.66666 3.2475 1.66666 4.16667V13.3333C1.66666 14.2525 2.41416 15 3.33333 15H9.16666V16.6667H6.66666V18.3333H13.3333V16.6667H10.8333V15H16.6667C17.5858 15 18.3333 14.2525 18.3333 13.3333V4.16667C18.3333 3.2475 17.5858 2.5 16.6667 2.5ZM3.33333 11.6667V4.16667H16.6667L16.6683 11.6667H3.33333Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === "mobile" && (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.417 1.66675H6.08366C5.16449 1.66675 4.41699 2.41425 4.41699 3.33341V16.6667C4.41699 17.5859 5.16449 18.3334 6.08366 18.3334H14.417C15.3362 18.3334 16.0837 17.5859 16.0837 16.6667V3.33341C16.0837 2.41425 15.3362 1.66675 14.417 1.66675ZM6.08366 14.1659V4.16675H14.417L14.4187 14.1659H6.08366Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
