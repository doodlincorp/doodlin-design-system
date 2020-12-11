import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'min' | 'big';
}

const Button: React.FC<IButtonProps> = ({
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button className={`_BUTTON_ ${className} ${size}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
