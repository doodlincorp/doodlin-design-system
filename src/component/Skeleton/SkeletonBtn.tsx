import React, { HTMLAttributes } from "react";
import "./index.scss";
import cn from "classnames";
import { TDefaultSize } from "../..";

export interface ISkeletonBtnProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "text" | "rect" | "circle";
  animation?: "pulse" | "wave" | "false";
  width?: number | string;
  height?: number | string;
  fitContent?: boolean;
  withChildren?: boolean;
  size?: TDefaultSize;
}

export const SkeletonBtn: React.FC<ISkeletonBtnProps> = ({
  className,
  variant = "text",
  animation = "wave",
  width,
  height,
  fitContent,
  children,
  withChildren,
  size = "md",
  ...props
}) => {
  return (
    <div
      className={cn("_SKELETON_ _BTN_", className, variant, animation, size, {
        fitContent,
        withChildren,
      })}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
