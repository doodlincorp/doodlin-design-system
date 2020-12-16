import React from 'react';
import cn from 'classnames';
import './Spinner.scss';

export interface ISpinnerProps {
  className?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
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
