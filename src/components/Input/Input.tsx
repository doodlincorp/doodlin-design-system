import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
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

export interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLInputElement> {
  borderType?: 'box' | 'single-line' | 'underline';
  areaType?: 'scroll' | 'autosize';
}
export const Textarea: React.FC<ITextareaProps> = ({
  className,
  children,
  borderType = 'box',
  disabled,
  ...props
}) => (
  <textarea
    className={cn('_TEXTAREA_', className, borderType, {
      dis: disabled,
      'dis-single-line': borderType === 'single-line' && disabled,
      'dis-underline': borderType === 'underline' && disabled,
    })}
    {...props}
  >
    {children}
  </textarea>
);

export default Input;
