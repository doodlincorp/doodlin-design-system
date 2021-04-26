import React, { MouseEvent } from "react";
import cn from "classnames";
import "./index.scss";

export interface IToggleProps {
  className?: string;
  open: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Toggle: React.FC<IToggleProps> = ({
  className,
  onClick,
  open,
  ...props
}) => {
  return (
    <div
      className={cn("_TOGGLE_", className, { open })}
      onClick={onClick}
      {...props}
    >
      <div className="toggle-circle"></div>
    </div>
  );
};
export default Toggle;
