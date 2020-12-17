import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import './Input.scss';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: 'xxs' | 'sm' | 'md' | 'lg' | 'xxxl';
  borderType?: 'border' | 'underline' | 'none';
}

export const Input: React.FC<IInputProps> = ({
  className,
  size = 'md',
  borderType = 'border',
  disabled,
  ...props
}) => {
  return (
    <input
      className={cn('_INPUT_', className, size, borderType, {
        dis: disabled,
        'dis-underline': borderType === 'underline' && disabled,
        'dis-none': borderType === 'none' && disabled,
      })}
      {...props}
    />
  );
};

export default Input;
