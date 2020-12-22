import React from 'react';
import cn from 'classnames';
import './index.scss';

export interface ITextProps {
  className?: string;
  block?: boolean;
  nonKorean?: boolean;
  size?:
    | 'tit-xxxl'
    | 'tit-xxl'
    | 'tit-xl'
    | 'tit-lg'
    | 'tit-md'
    | 'ui-lg'
    | 'ui-md'
    | 'ui-sm'
    | 'ui-xs'
    | 'desc-lg'
    | 'desc-md'
    | 'desc-sm'
    | 'desc-xs';
}

export const Text: React.FC<ITextProps> = ({
  className,
  children,
  block,
  nonKorean,
  size,
  ...props
}) => {
  return (
    <span
      className={cn('_TEXT_', className, size, {
        block: block,
        nK: nonKorean,
      })}
      {...props}
    >
      {children}
    </span>
  );
};

export default Text;
