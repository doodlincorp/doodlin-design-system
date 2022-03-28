import React from "react";
import cn from "classnames";

import "./index.scss";
import { TButtonSize } from "../..";

export interface ISpinnerProps {
  className?: string;
  size?: TButtonSize;
}

export const Spinner: React.FC<ISpinnerProps> = ({
  className,
  size = "md",
  children,
  ...props
}) => {
  return (
    <div className={cn("_SPINNER_", className, size)} {...props}>
      {children}
    </div>
  );
};

export default Spinner;
