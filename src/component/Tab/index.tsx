import React, { HTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";

export interface ITabItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  label?: string;
  width?: number;
  selected?: boolean;
  icon?: { leading?: React.ReactElement; tailing?: React.ReactElement };
  disabled?: boolean;
}

export const TabItem: React.FC<ITabItemProps> = ({
  className,
  onClick,
  label,
  width,
  selected,
  icon,
  disabled,
  ...props
}) => {
  return (
    <div
      className={cn("_TABITEM_", { selected, iconOnly: !label, disabled })}
      onClick={onClick}
      style={{ width: width }}
      {...props}
    >
      {icon?.leading && <div className="leading-icon">{icon.leading}</div>}
      {label}
      {icon?.tailing && <div className="tailing-icon">{icon.tailing}</div>}
    </div>
  );
};

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
