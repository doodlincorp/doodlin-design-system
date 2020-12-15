import React, { ColorHTMLAttributes } from 'react';
import cn from 'classnames';
import './Color.scss';

export interface IColorProps extends ColorHTMLAttributes<HTMLColorElement> {}

const Color: React.FC<IColorProps> = ({ className, children, ...props }) => {
  return (
    <Color className={cn(`_COLOR_`, className)} {...props}>
      {children}
    </Color>
  );
};

export default Color;
