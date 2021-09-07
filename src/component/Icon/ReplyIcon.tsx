import React from "react";
import { EColorMap } from "../../utils/colorMap";
import "./index.scss";
import cn from "classnames";

export interface IReplyIconProps {
  color?: EColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "solid" | "border";
}

export const ReplyIcon: React.FC<IReplyIconProps> = ({
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
      {variant === "solid" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M11 6.914V2.586L6.293 7.293L2.519 11.067L6.36 14.268L11 18.135V13.9C19.146 13.286 22 18 22 18C22 15.063 21.758 12.015 19.449 9.707C16.765 7.022 12.878 6.832 11 6.914Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === "border" && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M11 7.05V4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3C9.73766 3.0011 9.48626 3.10526 9.3 3.29L2.3 10.29C2.20627 10.383 2.13188 10.4936 2.08111 10.6154C2.03034 10.7373 2.0042 10.868 2.0042 11C2.0042 11.132 2.03034 11.2627 2.08111 11.3846C2.13188 11.5064 2.20627 11.617 2.3 11.71L9.3 18.71C9.44039 18.8476 9.61821 18.9408 9.81126 18.9779C10.0043 19.015 10.204 18.9944 10.3854 18.9186C10.5668 18.8429 10.7218 18.7153 10.8311 18.5519C10.9405 18.3886 10.9992 18.1966 11 18V14.9H11.85C13.4299 14.8764 14.996 15.197 16.4397 15.8393C17.8833 16.4817 19.1698 17.4306 20.21 18.62C20.3354 18.7869 20.5098 18.9104 20.7088 18.9731C20.9079 19.0359 21.1216 19.0348 21.32 18.97C21.5219 18.9019 21.6968 18.771 21.8191 18.5965C21.9414 18.422 22.0048 18.213 22 18C22 8.88 13.92 7.32 11 7.05ZM11.85 12.88C11.1812 12.8779 10.5129 12.9213 9.85 13.01C9.61326 13.0459 9.39727 13.1656 9.24129 13.3473C9.0853 13.5289 8.99969 13.7606 9 14V15.59L4.42 11L9 6.41V8C9 8.26522 9.10536 8.51957 9.2929 8.70711C9.48043 8.89464 9.73479 9 10 9C10.91 9 18.11 9.2 19.67 15.43C17.4057 13.7606 14.6632 12.8663 11.85 12.88Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
