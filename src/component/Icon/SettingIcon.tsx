import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface ISettingIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
}

export const SettingIcon: React.FC<ISettingIconProps> = ({
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2175 6.5L20.3671 8.5C20.6071 8.92 20.5071 9.46 20.1372 9.76L19.3075 10.45C18.3378 11.25 18.3378 12.74 19.3075 13.54L20.1372 14.23C20.5171 14.54 20.6071 15.08 20.3671 15.5L19.2175 17.5C18.9676 17.93 18.4578 18.11 17.998 17.94L16.9883 17.56C15.8187 17.11 14.5291 17.86 14.3192 19.1L14.1393 20.16C14.0593 20.65 13.6394 21 13.1496 21H10.8404C10.3506 21 9.9407 20.65 9.86073 20.17L9.68079 19.11C9.48086 17.87 8.1913 17.13 7.0117 17.57L6.00205 17.95C5.5422 18.12 5.02238 17.93 4.78246 17.51L3.63285 15.51C3.39294 15.09 3.4829 14.55 3.86278 14.24L4.69249 13.55C5.66216 12.75 5.66216 11.26 4.69249 10.46L3.86278 9.77C3.4829 9.46 3.39294 8.92 3.63285 8.5L4.78246 6.5C5.02238 6.08 5.5422 5.89 5.99205 6.07L7.0117 6.44C8.1813 6.89 9.47086 6.14 9.68079 4.9L9.86073 3.84C9.9407 3.35 10.3506 3 10.8404 3H13.1496C13.6394 3 14.0493 3.35 14.1393 3.84L14.3192 4.9C14.5191 6.14 15.8087 6.88 16.9883 6.44L17.998 6.06C18.4578 5.89 18.9776 6.08 19.2175 6.5ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          fill={color ? colorMap[color] : colorMap.gray_8}
        />
      </svg>
    </i>
  );
};
