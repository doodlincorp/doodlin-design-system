import React, { TextareaHTMLAttributes } from 'react';
import Input from '../components/Input/Input';
import cn from 'classnames';
import '../components/Input/Input';
import '../reset.scss';

export default {
  title: 'Component/Input',
  component: Input,
};

export const Default = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input placeholder='NULL' />
    <Input placeholder='내용을 입력하세요' />
  </div>
);

export const Size = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input placeholder='NULL' />
    <Input size='xxs' placeholder='내용을 입력하세요' />
    <Input size='sm' placeholder='내용을 입력하세요' />
    <Input size='md' placeholder='내용을 입력하세요' />
    <Input size='lg' placeholder='내용을 입력하세요' />
    <Input size='xxxl' placeholder='내용을 입력하세요' />
  </div>
);

export const BorderType = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input placeholder='NULL' />
    <Input placeholder='내용을 입력하세요' />
    <Input borderType='underline' placeholder='내용을 입력하세요' />
    <Input borderType='none' placeholder='내용을 입력하세요' />
  </div>
);

export const Disabled = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input placeholder='NULL' />
    <Input placeholder='비활성화 되었습니다' disabled />
    <Input borderType='underline' placeholder='비활성화 되었습니다' disabled />
    <Input borderType='none' placeholder='비활성화 되었습니다' disabled />
  </div>
);

export const InputTextarea = () => {
  interface ITextareaProps extends TextareaHTMLAttributes<HTMLInputElement> {
    underline?: boolean;
    autosize?: boolean;
  }
  const Textarea: React.FC<ITextareaProps> = ({
    className,
    children,
    underline,
    autosize,
    ...props
  }) => (
    <textarea
      className={cn('_TEXTAREA_', className, { u: underline, auto: autosize })}
      {...props}
    >
      {children}
    </textarea>
  );
  return (
    <div style={{ padding: 10, maxWidth: 500 }}>
      <Textarea placeholder='높이를 넘어가면 스크롤이 생기는 입력창입니다'></Textarea>
      <Textarea
        placeholder='높이를 넘어가면 자동으로 늘어나고 싶은 입력창입니다'
        autosize
        contentEditable
      ></Textarea>
      <Textarea
        placeholder='높이를 넘어가면 자동으로 늘어나고 싶은 입력창입니다'
        underline
        contentEditable
      ></Textarea>
    </div>
  );
};
