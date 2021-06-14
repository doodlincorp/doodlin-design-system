import React, { TextareaHTMLAttributes } from "react";
import cn from "classnames";
import AutoResizeTextarea from "react-textarea-autosize";
import "./index.scss";

export interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  borderType?: "box" | "single-line" | "underline";
  areaType?: "scroll" | "autosize"; // --> autosize는 따로 만들어야함 default textarea / autosize textarea
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      className,
      children,
      borderType = "box",
      disabled,
      areaType = "scroll",
      spellCheck = false,
      ...props
    },
    ref,
  ) => {
    if (areaType === "autosize") {
      return (
        <AutoResizeTextarea
          className={cn("_TEXTAREA_", className, borderType, areaType, {
            disabled,
          })}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          ref={ref}
        >
          {children}
        </AutoResizeTextarea>
      );
    }
    return (
      <textarea
        className={cn("_TEXTAREA_", className, borderType, areaType, {
          disabled,
        })}
        {...props}
        ref={ref}
      >
        {children}
      </textarea>
    );
  },
);

export default Textarea;
