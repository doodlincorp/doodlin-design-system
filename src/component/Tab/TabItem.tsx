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

const TabItem: React.FC<ITabItemProps> = ({
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
      className={cn("_TABITEM_", className, {
        selected,
        iconOnly: !label,
        disabled,
      })}
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

export default TabItem;
