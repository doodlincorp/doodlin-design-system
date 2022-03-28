import React, { HTMLAttributes } from "react";
import cn from "classnames";

import "./index.scss";
import Text from "../Text";
import { TFontSize } from "../..";
import { CheckIcon } from "../Icon/CheckIcon";
import { EColorMap } from "../../utils/colorMap";

export interface ICheckboxProps extends HTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  disabled?: boolean;
  label?: string;
  labelSize?: TFontSize;
  labelWeight?: "light" | "regular" | "medium" | "bold";
  size?: number;
  variant?: "square" | "circle";
}

const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  selected,
  disabled,
  label,
  labelSize,
  labelWeight,
  size = 16,
  variant,
  ...props
}) => {
  return (
    <button
      tabIndex={!label ? -1 : disabled === true ? -1 : 0}
      className={cn("_CHECKBOX_", className, { onlyBtn: !label })}
      {...props}
    >
      <div
        tabIndex={!label && !disabled ? 0 : -1}
        className={cn("btn", variant, {
          selected,
          disabled,
          sm: size === 16,
          md: size === 20,
          lg: size === 24,
        })}
        style={{ width: size, minWidth: size, height: size }}
      >
        <CheckIcon
          size={size}
          color={selected ? EColorMap.white : EColorMap.transparent}
        />
      </div>
      {label && (
        <Text
          className={cn("label", { disabled })}
          variant="inline"
          size={labelSize}
          weight={labelWeight}
        >
          {label}
        </Text>
      )}
    </button>
  );
};
export default Checkbox;
