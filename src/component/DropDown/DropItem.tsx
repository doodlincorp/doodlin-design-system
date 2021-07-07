import React, { HTMLAttributes } from "react";
import cn from "classnames";
import Button from "../Button";

export interface IDropItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  text: string;
  icon?: JSX.Element | string;
  loading?: boolean;
  disabled?: boolean;
  variant?: "basic" | "danger";
}

const DropItem: React.FC<IDropItemProps> = ({
  className,
  text,
  icon,
  disabled,
  loading,
  variant,
  ...props
}) => {
  return (
    <div className={cn("_DROP_ITEM_", variant)} {...props}>
      <Button
        className={className}
        variant="quiet"
        buttonType="light"
        size="sm"
        fullWidth
        label={{
          labelLeadingIcon:
            typeof icon === "string" ? (
              <div className="emoji">{icon}</div>
            ) : (
              icon
            ),
          labelText: text,
        }}
        disabled={disabled}
        loading={loading}
      />
    </div>
  );
};

export default DropItem;
