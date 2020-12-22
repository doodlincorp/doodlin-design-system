import React from 'react';
import cn from 'classnames';
import './index.scss';
import { TDefaultSize } from '../..';

export interface ISpinnerProps {
  className?: string;
  size?: TDefaultSize;
}

export const Spinner: React.FC<ISpinnerProps> = ({
  className,
  size = 'md',
  children,
  ...props
}) => {
  return (
    <div className={cn('_SPINNER_', className, size)} {...props}>
      {children}
    </div>
  );
};

export default Spinner;
