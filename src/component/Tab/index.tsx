import React from "react";
import cn from "classnames";
import "./index.scss";

export interface ITabProps {
  className?: string;
  variant?: "rail" | "underline";
  size?: "xs" | "sm" | "md";
}

const Tab: React.FC<ITabProps> = ({
  className,
  children,
  variant = "rail",
  size = "md",
  ...props
}) => {
  return (
    <div className={cn("_TAB_", className, variant, size)} {...props}>
      {variant === "rail" ? (
        <div className="rail">{children}</div>
      ) : (
        <div className="underline">{children}</div>
      )}
    </div>
  );
};

export default Tab;
