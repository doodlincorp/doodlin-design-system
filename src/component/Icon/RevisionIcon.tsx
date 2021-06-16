import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IRevisionIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const RevisionIcon: React.FC<IRevisionIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
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
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          d="M19.89 10.105C19.676 9.6 19.411 9.11 19.101 8.649L17.443 9.768C17.681 10.12 17.884 10.495 18.047 10.883C18.215 11.281 18.344 11.696 18.43 12.113C18.518 12.546 18.563 12.991 18.563 13.437C18.563 13.883 18.518 14.33 18.43 14.761C18.344 15.179 18.216 15.592 18.046 15.992C17.884 16.378 17.681 16.753 17.443 17.104C17.209 17.451 16.938 17.778 16.64 18.077C16.343 18.374 16.016 18.643 15.667 18.879C15.315 19.117 14.941 19.32 14.553 19.483C14.158 19.65 13.744 19.779 13.324 19.866C12.46 20.041 11.538 20.041 10.678 19.866C10.256 19.779 9.84101 19.65 9.44501 19.482C9.05801 19.319 8.68401 19.116 8.33201 18.878C7.98501 18.645 7.65901 18.375 7.36101 18.078C7.06201 17.778 6.79201 17.45 6.55801 17.105C6.32101 16.754 6.11801 16.379 5.95301 15.99C5.78601 15.594 5.65801 15.181 5.57101 14.76C5.48301 14.329 5.43801 13.884 5.43801 13.437C5.43801 12.99 5.48301 12.545 5.57201 12.113C5.65801 11.693 5.78601 11.279 5.95301 10.883C6.11801 10.493 6.32201 10.118 6.55801 9.769C6.79201 9.422 7.06201 9.095 7.36001 8.797C7.65601 8.5 7.98301 8.23 8.33201 7.995C8.68201 7.759 9.05701 7.555 9.44601 7.39C9.84101 7.223 10.256 7.094 10.676 7.008C10.783 6.986 10.892 6.976 11 6.959V10L16 6L11 2V4.938C10.757 4.967 10.514 5 10.275 5.049C9.72501 5.162 9.18301 5.33 8.66701 5.549C8.15801 5.764 7.66801 6.03 7.21201 6.339C6.75801 6.645 6.33201 6.996 5.94501 7.383C5.55701 7.771 5.20601 8.197 4.90001 8.649C4.59101 9.106 4.32601 9.595 4.11001 10.104C3.89101 10.622 3.72301 11.163 3.61101 11.712C3.49501 12.275 3.43701 12.856 3.43701 13.438C3.43701 14.02 3.49601 14.6 3.61101 15.163C3.72401 15.714 3.89201 16.255 4.11001 16.77C4.32501 17.279 4.59101 17.769 4.90001 18.226C5.20501 18.676 5.55601 19.102 5.94501 19.494C6.33401 19.882 6.75901 20.233 7.21001 20.537C7.66901 20.848 8.15901 21.114 8.66601 21.327C9.18201 21.545 9.72301 21.714 10.275 21.827C10.839 21.941 11.419 22 12 22C12.581 22 13.161 21.941 13.727 21.826C14.278 21.712 14.819 21.544 15.331 21.327C15.838 21.114 16.329 20.848 16.788 20.537C17.241 20.231 17.667 19.88 18.056 19.491C18.444 19.102 18.795 18.677 19.101 18.225C19.413 17.763 19.677 17.273 19.889 16.77C20.109 16.25 20.278 15.709 20.389 15.162C20.504 14.599 20.563 14.018 20.563 13.437C20.563 12.857 20.504 12.276 20.389 11.712C20.277 11.166 20.108 10.625 19.89 10.105Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
