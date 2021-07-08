import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IMapPinIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "solid" | "border";
}

export const MapPinIcon: React.FC<IMapPinIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "solid",
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
      {variant === "solid" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M12.0002 2.00012C7.5892 2.00012 4.0002 5.58912 4.0002 9.99512C3.9712 16.4401 11.6962 21.7841 12.0002 22.0001C12.0002 22.0001 20.0292 16.4401 20.0002 10.0001C20.0002 5.58912 16.4112 2.00012 12.0002 2.00012ZM12.0002 14.0001C9.7902 14.0001 8.0002 12.2101 8.0002 10.0001C8.0002 7.79012 9.7902 6.00012 12.0002 6.00012C14.2102 6.00012 16.0002 7.79012 16.0002 10.0001C16.0002 12.2101 14.2102 14.0001 12.0002 14.0001Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 22C11.797 22 11.594 21.938 11.42 21.814C11.116 21.599 3.97103 16.44 4.00003 9.995C4.00003 5.589 7.58903 2 12 2C16.411 2 20 5.589 20 10C20.029 16.44 12.884 21.599 12.58 21.814C12.406 21.938 12.203 22 12 22ZM18 10.005C18 6.691 15.309 4 12 4C8.69103 4 6.00003 6.691 6.00003 10C5.97903 14.441 10.389 18.427 12 19.735C13.612 18.428 18.021 14.443 18 10.005ZM16 10C16 12.206 14.206 14 12 14C9.794 14 8 12.206 8 10C8 7.794 9.794 6 12 6C14.206 6 16 7.794 16 10ZM14 10C14 8.897 13.103 8 12 8C10.897 8 10 8.897 10 10C10 11.103 10.897 12 12 12C13.103 12 14 11.103 14 10Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
