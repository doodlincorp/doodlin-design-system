import React, { HTMLAttributes } from "react";
import "./index.scss";
import cn from "classnames";

export interface ISkeletonBoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "text" | "rect" | "circle";
  animation?: "pulse" | "wave" | "false";
  width?: number | string;
  height?: number | string;
  fitContent?: boolean;
  withChildren?: boolean;
}

export const SkeletonBox: React.FC<ISkeletonBoxProps> = ({
  className,
  variant = "text",
  animation = "wave",
  width,
  height,
  fitContent,
  children,
  withChildren,
  ...props
}) => {
  return (
    <div
      className={cn("_SKELETON_", className, variant, animation, {
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
