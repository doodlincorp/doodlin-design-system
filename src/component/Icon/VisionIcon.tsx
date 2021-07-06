import React from "react";
import { colorMap, IColorMap } from "./colorMap";
import "./index.scss";
import cn from "classnames";

export interface IVisionIconProps {
  color?: keyof IColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: "vision" | "invision";
}

export const VisionIcon: React.FC<IVisionIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = "vision",
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
      {variant === "vision" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.06105 12C2.61377 8.00751 6.85274 4.90216 12 4.90216C17.1473 4.90216 21.3863 8.00752 21.939 12L21.939 12C21.387 15.9869 17.1591 19.0892 12.0216 19.0978L12 19.0979L11.9784 19.0978C6.84087 19.0892 2.61298 15.9869 2.06104 12H2.06105ZM14.6012 12C14.6012 13.4366 13.4366 14.6012 12 14.6012C10.5634 14.6012 9.3988 13.4366 9.3988 12C9.3988 10.5634 10.5634 9.3988 12 9.3988C13.4366 9.3988 14.6012 10.5634 14.6012 12ZM16.6012 12C16.6012 14.5412 14.5412 16.6012 12 16.6012C9.45883 16.6012 7.3988 14.5412 7.3988 12C7.3988 9.45883 9.45883 7.3988 12 7.3988C14.5412 7.3988 16.6012 9.45883 16.6012 12Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.44357 17.1422L2.79291 19.7929L4.20712 21.2071L21.2071 4.20712L19.7929 2.79291L16.734 5.85183C15.3248 5.24595 13.7127 4.90216 12 4.90216C6.85274 4.90216 2.61377 8.00751 2.06105 12H2.06104C2.34441 14.0469 3.5967 15.8606 5.44357 17.1422ZM8.11671 14.4691L9.5944 12.9914C9.46835 12.6859 9.3988 12.3511 9.3988 12C9.3988 10.5634 10.5634 9.3988 12 9.3988C12.3511 9.3988 12.6859 9.46835 12.9914 9.5944L14.4691 8.11671C13.7557 7.66216 12.9086 7.3988 12 7.3988C9.45883 7.3988 7.3988 9.45883 7.3988 12C7.3988 12.9086 7.66216 13.7557 8.11671 14.4691ZM9.2195 18.7851C10.0956 18.9872 11.0212 19.0962 11.9784 19.0978L12 19.0979L12.0216 19.0978C17.1591 19.0892 21.387 15.9869 21.939 12L21.939 12C21.7347 10.5244 21.0269 9.17004 19.9558 8.04881L16.5672 11.4375C16.5896 11.6218 16.6012 11.8096 16.6012 12C16.6012 14.5412 14.5412 16.6012 12 16.6012C11.8096 16.6012 11.6218 16.5896 11.4375 16.5672L9.2195 18.7851Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
    </i>
  );
};
