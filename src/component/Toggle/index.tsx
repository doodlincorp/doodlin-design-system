import React from "react";
import cn from "classnames";
import "./index.scss";

export interface IToggleProps {
  className?: string;
  open: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
}

const Toggle: React.FC<IToggleProps> = ({
  className,
  onClick,
  open,
  disabled,
  ...props
}) => {
  return (
    <div
      className={cn("_TOGGLE_", className, { open, disabled })}
      onClick={onClick}
      {...props}
    >
      <div className="toggle-circle"></div>
    </div>
  );
};
export default Toggle;
