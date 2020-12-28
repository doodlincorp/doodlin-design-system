import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import './index.scss';
import { TDefaultSize } from '../..';

interface MutableRefObject<T> {
  current: T;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: TDefaultSize;
  borderType?: 'border' | 'underline' | 'none';
  ref?: MutableRefObject<HTMLInputElement | null>;
}

export const Input: React.FC<IInputProps> = ({
  className,
  inputSize = 'md',
  borderType = 'border',
  disabled,
  ref,
  ...props
}) => {
  return (
    <input
      className={cn('_INPUT_', className, inputSize, borderType, {
        dis: disabled,
        'dis-underline': borderType === 'underline' && disabled,
        'dis-none': borderType === 'none' && disabled,
      })}
      {...props}
    />
  );
};

export default Input;
