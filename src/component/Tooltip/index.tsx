import React from "react";
import cn from "classnames";
import "./index.scss";
import { InfoMarkIcon } from "../../component/Icon/InfoMarkIcon";

export interface ITooltipProps {
  className?: string;
  variant?: "box" | "tail";
  tooltipText: string;
  placement?: "left" | "center" | "right";
  // trigger?: "hover" | "click";
}

const Tooltip: React.FC<ITooltipProps> = ({
  className,
  children,
  variant = "box",
  tooltipText,
  placement = "center",
  // trigger = "hover",
}) => {
  return (
    <div
      className={cn("_TOOLTIP_", className, {
        tail: variant === "tail",
        left: placement === "left",
        right: placement === "right",
      })}
    >
      <div className="target">
        {children}

        {tooltipText.length > 0 && (
          <div className="tooltip-box">
            {variant === "tail" && (
              <InfoMarkIcon className="icon" color="blue_4" />
            )}
            {tooltipText}
          </div>
        )}
      </div>
    </div>
  );
};
export default Tooltip;
