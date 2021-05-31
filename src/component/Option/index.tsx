import React, { HTMLAttributes } from "react";
import cn from "classnames";
import "./index.scss";

export interface IOptionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Option: React.FC<IOptionProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("_OPTION_", className)} {...props}>
      {children}
    </div>
  );
};

export default Option;
