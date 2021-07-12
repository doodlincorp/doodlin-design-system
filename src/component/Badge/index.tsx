import React, { HTMLAttributes } from "react";
import "./index.scss";
import cn from "classnames";

export interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  number: number;
}

const Badge: React.FC<IBadgeProps> = ({ className, number, ...props }) => {
  return (
    <div className={cn("_BADGE_", className)} {...props}>
      {number}
    </div>
  );
};

export default Badge;
