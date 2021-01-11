import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './index.scss';
import { TDefaultSize } from '../..';
import Spinner from '../Spinner';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TDefaultSize;
  variant?: 'ghost' | 'text';
  fullWidth?: boolean;
  loading?: 'spin';
  rounded?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  size = 'md',
  variant,
  disabled,
  fullWidth,
  loading,
  rounded,
  ...props
}) => {
  return (
    <button
      className={cn(`_BUTTON_`, className, size, variant, loading, {
        spin: loading,
        dis: disabled,
        round: rounded,
        'dis-ghost': variant === 'ghost' && disabled,
        'dis-text': variant === 'text' && disabled,
        fw: fullWidth,
      })}
      {...props}
    >
      <span
        className={cn({
          none: loading,
        })}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
