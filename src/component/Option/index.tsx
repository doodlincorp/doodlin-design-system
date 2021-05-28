import React, { HTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";

export interface IOptionProps {
  className?: string;
}

export const Option: React.FC<IOptionProps> = ({ className, children }) => {
  return <div className={cn("_OPTION_", className)}>{children}</div>;
};

export default Option;
