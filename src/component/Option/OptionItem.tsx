import React from "react";
import cn from "classnames";
import "./index.scss";
import Button from "../Button";

export interface IOptionProps {
  className?: string;
  text: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: "basic" | "danger";
}

export const OptionItem: React.FC<IOptionProps> = ({
  className,
  text,
  icon,
  onClick,
  disabled,
  loading,
  variant,
}) => {
  return (
    <div className={cn("_OPTION_ITEM_", variant)}>
      <Button
        className={className}
        variant="quiet"
        size="sm"
        fullWidth
        label={{ labelIcon: icon, labelText: text }}
        onClick={onClick}
        disabled={disabled}
        loading={loading}
      />
    </div>
  );
};
