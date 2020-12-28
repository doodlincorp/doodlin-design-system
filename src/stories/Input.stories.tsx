import React from 'react';
import Input from '../component/Input';
import '../reset.scss';
import '../component/Input';
import Textarea from '../component/Textarea';

export default {
  title: 'Component/Input',
  component: Input,
};

export const Default = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input placeholder="내용을 입력하세요" />
  </div>
);

export const Size = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input inputSize="xxs" placeholder="내용을 입력하세요" />
    <Input inputSize="sm" placeholder="내용을 입력하세요" />
    <Input inputSize="md" placeholder="내용을 입력하세요" />
    <Input inputSize="lg" placeholder="내용을 입력하세요" />
    <Input inputSize="xxxl" placeholder="내용을 입력하세요" />
  </div>
);

export const BorderType = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input placeholder="내용을 입력하세요" />
    <Input borderType="underline" placeholder="내용을 입력하세요" />
    <Input borderType="none" placeholder="내용을 입력하세요" />
  </div>
);

export const InputTextarea = () => {
  return (
    <div style={{ padding: 10, maxWidth: 800 }}>
      <Textarea
        placeholder="높이를 넘어가면 스크롤이 생기는 입력창입니다"
        rows={8}
      ></Textarea>
      <Textarea
        placeholder="높이를 넘어가면 자동으로 늘어나고 싶은 입력창입니다"
        borderType="single-line"
        rows={1}
      ></Textarea>
      <Textarea
        placeholder="높이를 넘어가면 자동으로 늘어나고 싶은 입력창입니다"
        borderType="underline"
        rows={1}
      ></Textarea>
    </div>
  );
};

export const Disabled = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input placeholder="비활성화 되었습니다" disabled />
    <Input borderType="underline" placeholder="비활성화 되었습니다" disabled />
    <Input borderType="none" placeholder="비활성화 되었습니다" disabled />
    <div style={{ marginTop: 30 }}>
      <Textarea
        placeholder="높이를 넘어가면 스크롤이 생기는 입력창입니다"
        rows={4}
        disabled
      ></Textarea>
      <Textarea
        placeholder="높이를 넘어가면 자동으로 늘어나고 싶은 입력창입니다"
        borderType="single-line"
        rows={1}
        disabled
      ></Textarea>
      <Textarea
        placeholder="높이를 넘어가면 자동으로 늘어나고 싶은 입력창입니다"
        borderType="underline"
        rows={1}
        disabled
      ></Textarea>
    </div>
  </div>
);
