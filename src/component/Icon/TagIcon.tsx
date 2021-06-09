import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import cn from "classnames";

export interface ITagIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant?: "ghost" | "solid";
}

export const TagIcon: React.FC<ITagIconProps> = ({
  color,
  className,
  variant = "solid",
}) => {
  return (
    <div
      className={cn("TagIcon", className)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {variant === "ghost" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M6.862 2.19533C6.98667 2.07 7.156 2 7.33333 2H13.3333C13.702 2 14 2.298 14 2.66667V8.66667C14 8.844 13.93 9.01333 13.8047 9.138L8.47133 14.4713C8.34133 14.6013 8.17067 14.6667 8 14.6667C7.82933 14.6667 7.65867 14.6013 7.52867 14.4713L1.52867 8.47133C1.268 8.21067 1.268 7.78933 1.52867 7.52867L6.862 2.19533ZM8 13.0573L12.6667 8.39067V3.33333H7.60933L2.94267 8L8 13.0573Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
          <path
            id="icon__fill"
            d="M10.336 6.66633C9.7819 6.66633 9.33269 6.21713 9.33269 5.663C9.33269 5.10888 9.7819 4.65967 10.336 4.65967C10.8901 4.65967 11.3394 5.10888 11.3394 5.663C11.3394 6.21713 10.8901 6.66633 10.336 6.66633Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
        </svg>
      )}
      {variant === "solid" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M7.60929 1.72392C7.85929 1.47392 8.19863 1.33325 8.55196 1.33325H13.3333C14.0693 1.33325 14.6666 1.93059 14.6666 2.66659V7.44792C14.6666 7.80125 14.526 8.14059 14.276 8.39059L8.94263 13.7239C8.42196 14.2446 7.57796 14.2446 7.05729 13.7239L2.27596 8.94258C1.75529 8.42192 1.75529 7.57792 2.27596 7.05725L7.60929 1.72392ZM11.3333 5.99992C12.0693 5.99992 12.6666 5.40259 12.6666 4.66659C12.6666 3.93059 12.0693 3.33325 11.3333 3.33325C10.5973 3.33325 9.99996 3.93059 9.99996 4.66659C9.99996 5.40259 10.5973 5.99992 11.3333 5.99992Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
        </svg>
      )}
    </div>
  );
};
