import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './Button.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  type?: 'ghost' | 'text';
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  size,
  type,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(`_BUTTON_`, className, size, type, disabled)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
