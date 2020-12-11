import React, {
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
  useImperativeHandle,
  useState,
} from "react";
import "./Input.scss";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  middleCheck?: (e: React.ChangeEvent<HTMLInputElement>) => boolean;
  ref?: MutableRefObject<HTMLInputElement | null>;
}

const Input = forwardRef<{ value: string }, IInputProps>(
  ({ middleCheck, ...props }, ref) => {
    const [value, setValue] = useState("");
    useImperativeHandle(ref, () => ({ value }), [value]);

    return (
      <input
        value={value}
        onChange={(e) => {
          if (!middleCheck || middleCheck(e)) setValue(e.target.value);
        }}
        {...props}
      />
    );
  }
);

export default Input;
