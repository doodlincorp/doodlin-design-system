import React, { HTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";

export interface ITabItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  label?: string;
  width?: number;
  selected?: boolean;
  icon?: { leading?: React.ReactElement; tailing?: React.ReactElement };
}

export const TabItem: React.FC<ITabItemProps> = ({
  className,
  onClick,
  label,
  width,
  selected,
  icon,
  ...props
}) => {
  return (
    <div
      className={cn("_TABITEM_", { selected, iconOnly: !label })}
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
  size?: "xs" | "sm" | "md";
}

const Tab: React.FC<ITabProps> = ({
  className,
  children,
  size = "md",
  ...props
}) => {
  return (
    <div className={cn("_TAB_", className, size)} {...props}>
      <div className="rail">{children}</div>
    </div>
  );
};

export default Tab;
