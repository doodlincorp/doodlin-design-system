import React, { useState } from "react";
import cn from "classnames";

import "./index.scss";
import { CloseIcon } from "../Icon/CloseIcon";
import { InfoMarkIcon } from "../Icon/InfoMarkIcon";
import { EColorMap } from "../../utils/colorMap";

export interface ICalloutProps {
  className?: string;
  icon?: boolean;
  several?: boolean;
  variant?: "info" | "danger";
}

const Callout: React.FC<ICalloutProps> = ({
  className,
  children,
  icon,
  several,
  variant = "info",
  ...props
}) => {
  const [open, setOpen] = useState(true);

  if (!open) {return <></>;}
  return (
    <div
      className={cn("_CALLOUT_", className, variant, { several })}
      {...props}
    >
      <div className="_left">
        {icon && (
          <InfoMarkIcon
            className="_icon"
            color={variant === "info" ? EColorMap.blue_7 : EColorMap.red_7}
            size={20}
          />
        )}

        <div>{children}</div>
      </div>
      <button className="_close-btn" onClick={() => setOpen(false)}>
        <CloseIcon
          color={variant === "info" ? EColorMap.blue_7 : EColorMap.red_7}
          size={20}
        />
      </button>
    </div>
  );
};

export default Callout;
