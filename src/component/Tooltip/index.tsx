import React from "react";
import cn from "classnames";
import "./index.scss";
import { InfoMarkIcon } from "../../asset/InfoMarkIcon";

export interface ITooltipProps {
  className?: string;
  variant?: "box" | "tail";
  tooltipText: { Text: string };
  placement?: "left" | "center" | "right";
  //trigger?: "hover" | "click";
}

const Tooltip: React.FC<ITooltipProps> = ({
  className,
  children,
  variant = "box",
  tooltipText,
  placement = "center",
  //trigger = "hover",
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

        <div className="tooltip-box">
          {variant === "tail" && <InfoMarkIcon className="icon" />}
          {tooltipText.Text}
        </div>
      </div>
    </div>
  );
};
export default Tooltip;
