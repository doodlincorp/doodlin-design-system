import React from "react";
import cn from "classnames";
import "./index.scss";
import { InfoMarkIcon } from "../../asset/InfoMarkIcon";

export interface ITooltipProps {
  className?: string;
  variant?: "box" | "tail";
  tooltipText: { Text: string };
  //trigger?: "hover" | "click";
}

const Tooltip: React.FC<ITooltipProps> = ({
  className,
  children,
  variant = "box",
  tooltipText,
  //trigger = "hover",
}) => {
  return (
    <div className={cn("_TOOLTIP_", className, { tail: variant === "tail" })}>
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