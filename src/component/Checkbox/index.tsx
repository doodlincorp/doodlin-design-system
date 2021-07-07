import React from "react";
import cn from "classnames";
import "./index.scss";
import Text from "../Text";
import { TFontSize } from "../..";
import { CheckIcon } from "../Icon/CheckIcon";

export interface ICheckboxProps {
  className?: string;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
  label?: string;
  labelSize?: TFontSize;
  labelWeight?: "light" | "regular" | "medium" | "bold";
  size?: number;
  variant?: "square" | "circle";
}

const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  onClick,
  selected,
  disabled,
  label,
  labelSize,
  labelWeight,
  size,
  variant,
  ...props
}) => {
  return (
    <div
      className={cn("_CHECKBOX_", className, { onlyBtn: !label })}
      onClick={onClick}
      {...props}
    >
      <div
        className={cn("btn", variant, {
          selected,
          disabled,
          sm: size === 16,
          md: size === 20,
          lg: size === 24,
        })}
        style={{ width: size, minWidth: size, height: size }}
      >
        <CheckIcon size={size} color={selected ? "white" : "transparent"} />
      </div>
      <Text
        className={cn("label", { disabled })}
        variant="inline"
        size={labelSize}
        weight={labelWeight}
      >
        {label}
      </Text>
    </div>
  );
};
export default Checkbox;
