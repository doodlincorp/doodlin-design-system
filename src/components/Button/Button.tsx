import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './Button.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  variant?: 'ghost' | 'text';
  fullWidth?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  size,
  variant,
  disabled,
  fullWidth,
  ...props
}) => {
  return (
    <button
      className={cn(`_BUTTON_`, className, size, variant, {
        dis: disabled,
        fw: fullWidth,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
