import React, { TextareaHTMLAttributes } from 'react';
import cn from 'classnames';
import './index.scss';

export interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  borderType?: 'box' | 'single-line' | 'underline';
  areaType?: 'scroll' | 'autosize'; // --> autosize는 따로 만들어야함 default textarea / autosize textarea
}
export const Textarea: React.FC<ITextareaProps> = ({
  className,
  children,
  borderType = 'box',
  disabled,
  spellCheck = false,
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

export default Textarea;
