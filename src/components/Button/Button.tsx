import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './Button.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  variant?: 'ghost' | 'text';
  fullWidth?: boolean;
  loading?: 'spin-sm' | 'spin-md' | 'spin-lg';
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  size = 'md',
  variant,
  disabled,
  fullWidth,
  loading,
  ...props
}) => {
  return (
    <button
      className={cn(`_BUTTON_`, className, size, variant, loading, {
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
